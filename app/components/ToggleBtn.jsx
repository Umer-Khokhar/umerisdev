import React from 'react'
import { Sun, Moon } from 'lucide-react'
import { useTheme } from 'next-themes'
const ToggleBtn = () => {
    const {theme, setTheme} = useTheme()
    return (
        <button
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="p-2 hover:bg-hover cursor-pointer rounded-lg transition-colors"
        >
            {theme === 'dark' ? (
                <Sun className="w-5 h-5 text-secondary" />
            ) : (
                <Moon className="w-5 h-5 text-secondary" />
            )}
        </button>
    )
}

export default ToggleBtn