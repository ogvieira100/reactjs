
// Initial State
export type ThemeState = {

    theme: 'light' | 'dark' | 'pink'
}

// Acrtions 
type ChangeTheme = {

    type: 'CHANGE_THEME'
    payload:ThemeState['theme']

}

export type ThemeAction = ChangeTheme