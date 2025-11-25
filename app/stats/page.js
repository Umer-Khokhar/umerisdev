"use client";
import { GitHubCalendar } from "react-github-calendar";
import React, { useState, useEffect } from "react";
import {
  Star,
  GitBranch,
  Code,
  Users,
  TrendingUp,
  Github,
  ExternalLink,
  Briefcase,
  Coffee,
} from "lucide-react";

export default function StatsPage() {
  const [stats, setStats] = useState(null);
  const [loading, setLoading] = useState(true);

  const username = "umer-khokhar"; // Replace with your GitHub username

  async function fetchStats() {
    try {
      // Fetch user profile
      const userRes = await fetch(`https://api.github.com/users/${username}`, {
        headers: {
          Authorization: process.env.github_token,
        },
      });
      const user = await userRes.json();

      // Fetch repositories
      const reposRes = await fetch(
        `https://api.github.com/users/${username}/repos?per_page=100`,
      );
      const repos = await reposRes.json();

      // Calculate total stars
      const totalStars = repos.reduce(
        (sum, repo) => sum + repo.stargazers_count,
        0,
      );

      const ownRepos = repos.filter((repo) => !repo.fork);

      // Get repositories you work with most (recently updated and pushed)
      const mostActiveRepos = ownRepos
        .filter((repo) => repo.pushed_at) // Only repos that have been pushed to
        .sort((a, b) => {
          // Sort by most recently pushed
          return new Date(b.pushed_at) - new Date(a.pushed_at);
        })
        .slice(0, 6);
      setStats({
        avatar: user.avatar_url,
        name: user.name || username,
        bio: user.bio,
        publicRepos: user.public_repos,
        followers: user.followers,
        following: user.following,
        totalStars: totalStars,
        topRepos: mostActiveRepos,
      });

      setLoading(false);
    } catch (error) {
      console.error("Error fetching GitHub data:", error);
      setLoading(false);
    }
  }
  useEffect(() => {
    fetchStats();
  }, []);

  // Career stats (update with your data)
  const careerStats = [
    {
      label: "Years Experience",
      value: "5+",
      icon: <Briefcase className="w-5 h-5 text-blue-600" />,
    },
    {
      label: "Projects Completed",
      value: "50+",
      icon: <Code className="w-5 h-5 text-green-600" />,
    },
    {
      label: "Happy Clients",
      value: "30+",
      icon: <Users className="w-5 h-5 text-purple-600" />,
    },
    {
      label: "Coffee Consumed",
      value: "∞",
      icon: <Coffee className="w-5 h-5 text-orange-600" />,
    },
  ];

  if (loading) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="text-center">
          <div className="w-12 h-12 border-4 border-slate-200 border-t-slate-900 rounded-full animate-spin mx-auto mb-4"></div>
          <p className="">Loading stats...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="padding-both">
      <div className="containers nav-space">
        {/* Header */}
        <div className="mb-12 pb-6 border-b border-slate-200">
          <h1 className="text-3xl font-bold mb-2">Statistics</h1>
          <p className=" text-lg">My professional journey and contributions</p>
        </div>

        {/* Career Stats */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-6">Career Overview</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {careerStats.map((stat, index) => (
              <div
                key={index}
                className="border border-border rounded-lg p-6 hover:border-slate-300 hover:shadow-sm transition-all"
              >
                <div className="flex items-center justify-between mb-3">
                  {stat.icon}
                  <span className="text-3xl font-bold">{stat.value}</span>
                </div>
                <div className="text-sm ">{stat.label}</div>
              </div>
            ))}
          </div>
        </section>

        {/* GitHub Stats */}
        {stats && (
          <section>
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-semibold">GitHub Activity</h2>
              <a
                href={`https://github.com/${username}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm  hover: transition-colors"
              >
                View Profile
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>

            {/* GitHub Profile Card */}
            <div className="border border-border rounded-lg p-6 mb-6 flex items-center gap-6">
              <img
                src={stats.avatar}
                alt="GitHub Profile"
                className="w-20 h-20 rounded-full border-2 border-border"
              />
              <div className="flex-1">
                <h3 className="text-xl font-semibold  mb-1">{stats.name}</h3>
                <p className=" mb-2">@{username}</p>
                {stats.bio && <p className="text-sm ">{stats.bio}</p>}
              </div>
            </div>

            {/* GitHub Stats Cards */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
              <div className="border border-border rounded-lg p-6 hover:border-slate-300 hover:shadow-sm transition-all">
                <div className="flex items-center justify-between mb-3">
                  <Code className="w-5 h-5 text-blue-600" />
                  <span className="text-3xl font-bold ">
                    {stats.publicRepos}
                  </span>
                </div>
                <div className="text-sm ">Public Repositories</div>
              </div>

              <div className="border border-border rounded-lg p-6 hover:border-slate-300 hover:shadow-sm transition-all">
                <div className="flex items-center justify-between mb-3">
                  <Star className="w-5 h-5 text-yellow-500" />
                  <span className="text-3xl font-bold ">
                    {stats.totalStars}
                  </span>
                </div>
                <div className="text-sm ">Total Stars</div>
              </div>

              <div className="border border-border rounded-lg p-6 hover:border-slate-300 hover:shadow-sm transition-all">
                <div className="flex items-center justify-between mb-3">
                  <Users className="w-5 h-5 text-purple-600" />
                  <span className="text-3xl font-bold ">{stats.followers}</span>
                </div>
                <div className="text-sm ">Followers</div>
              </div>

              <div className="border border-border rounded-lg p-6 hover:border-slate-300 hover:shadow-sm transition-all">
                <div className="flex items-center justify-between mb-3">
                  <TrendingUp className="w-5 h-5 text-green-600" />
                  <span className="text-3xl font-bold ">{stats.following}</span>
                </div>
                <div className="text-sm ">Following</div>
              </div>
            </div>
            <div className="my-8">
              <h2 className="text-xl font-bold mb-4">GitHub Contributions</h2>
              <div className="border border-border p-4 rounded-lg">
                <GitHubCalendar username="umer-khokhar" />
              </div>
            </div>
            {/* Top Repositories */}
            <div className="border border-border shadow-lg rounded-lg p-6">
              <h3 className="text-xl font-semibold  mb-6">Top Repositories</h3>

              <div className="space-y-4">
                {stats.topRepos.map((repo) => (
                  <div
                    key={repo.id}
                    className="p-4 border border-border rounded-lg hover:bg-border-hover transition-colors"
                  >
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex-1">
                        <a
                          href={repo.html_url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className=" font-semibold hover:text-blue-600 transition-colors"
                        >
                          {repo.name}
                        </a>
                        <p className="text-sm  mt-1">
                          {repo.description || "No description"}
                        </p>
                        <div className="flex items-center gap-4 mt-3 text-sm ">
                          <span className="flex items-center gap-1">
                            <Star className="w-4 h-4 text-yellow-500" />
                            {repo.stargazers_count}
                          </span>
                          <span className="flex items-center gap-1">
                            <GitBranch className="w-4 h-4" />
                            {repo.forks_count}
                          </span>
                          {repo.language && (
                            <code className="px-2 py-0.5 bg-white border border-border rounded text-xs">
                              {repo.language}
                            </code>
                          )}
                        </div>
                      </div>
                      <a
                        href={repo.html_url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600 hover:text-blue-700"
                      >
                        <ExternalLink className="w-5 h-5" />
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}
      </div>
    </div>
  );
}
