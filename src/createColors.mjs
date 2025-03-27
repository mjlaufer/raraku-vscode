export default function (colors) {
    return {
        // Base Colors - https://code.visualstudio.com/docs/getstarted/theme-color-reference#_base-colors
        focusBorder: colors.bg3,
        foreground: colors.fg1,
        'widget.shadow': colors.bg1,
        'selection.background': colors.bg3,
        descriptionForeground: colors.fg2,
        errorForeground: colors.red,

        // Text colors - https://code.visualstudio.com/docs/getstarted/theme-color-reference#text-colors
        'textBlockQuote.background': colors.bg2,
        'textBlockQuote.border': colors.bg3,
        'textCodeBlock.background': colors.bg3,
        'textLink.activeForeground': colors.blue,
        'textLink.foreground': colors.blue,
        'textPreformat.foreground': colors.fg2,
        'textSeparator.foreground': colors.fg2,

        // Button Control - https://code.visualstudio.com/docs/getstarted/theme-color-reference#_button-control
        'button.background': colors.blue,
        'button.foreground': colors.bg1,
        'button.hoverBackground': colors.blueBright,

        // Dropdown Control - https://code.visualstudio.com/docs/getstarted/theme-color-reference#_dropdown-control
        'dropdown.background': colors.bg2,
        'dropdown.listBackground': colors.bg2,
        'dropdown.border': colors.bg3,
        'dropdown.foreground': colors.fg1,

        // Input Control - https://code.visualstudio.com/docs/getstarted/theme-color-reference#_input-control
        'input.background': colors.bg1,
        'input.border': colors.bg3,
        'input.foreground': colors.fg1,
        'input.placeholderForeground': colors.fg2,
        'inputOption.activeBorder': colors.fg2,
        'inputValidation.errorBackground': colors.redBright,
        'inputValidation.errorForeground': colors.fg1,
        'inputValidation.errorBorder': colors.redBright,
        'inputValidation.infoBackground': colors.cyanBright,
        'inputValidation.infoForeground': colors.fg1,
        'inputValidation.infoBorder': colors.cyanBright,
        'inputValidation.warningBackground': colors.yellowBright,
        'inputValidation.warningForeground': colors.bg1,
        'inputValidation.warningBorder': colors.yellowBright,

        // Scroll Bar Control - https://code.visualstudio.com/docs/getstarted/theme-color-reference#_scroll-bar-control
        'scrollbar.shadow': colors.bg1,
        'scrollbarSlider.activeBackground': colors.bg2,
        'scrollbarSlider.background': colors.bg3,
        'scrollbarSlider.hoverBackground': colors.fg3,

        // Badge - https://code.visualstudio.com/docs/getstarted/theme-color-reference#_badge
        'badge.foreground': colors.fg1,
        'badge.background': colors.bg3,

        // Progress Bar - https://code.visualstudio.com/docs/getstarted/theme-color-reference#_progress-bar
        'progressBar.background': colors.blue,

        // Lists and Trees - https://code.visualstudio.com/docs/getstarted/theme-color-reference#_lists-and-trees
        'list.activeSelectionBackground': colors.bg3,
        'list.activeSelectionForeground': colors.fg1,
        'list.dropBackground': colors.bg3,
        'list.focusBackground': colors.bg3,
        'list.focusForeground': colors.fg1,
        'list.highlightForeground': colors.fg1,
        'list.hoverBackground': colors.bg3,
        'list.hoverForeground': colors.fg1,
        'list.inactiveSelectionBackground': colors.bg3,
        'list.inactiveSelectionForeground': colors.fg1,
        'list.inactiveFocusBackground': colors.bg3,
        'list.invalidItemForeground': colors.redBright,
        'list.errorForeground': colors.redBright,
        'list.warningForeground': colors.yellowBright,
        'listFilterWidget.background': colors.bg1,
        'listFilterWidget.outline': colors.bg3,
        'listFilterWidget.noMatchesOutline': colors.redBright,
        'tree.indentGuidesStroke': colors.bg3,

        // Activity Bar - https://code.visualstudio.com/docs/getstarted/theme-color-reference#_activity-bar
        'activityBar.background': colors.bg1,
        'activityBar.dropBackground': colors.bg2,
        'activityBar.foreground': colors.fg1,
        'activityBar.inactiveForeground': colors.fg2,
        'activityBar.border': colors.bg3,
        'activityBarBadge.background': colors.blue,
        'activityBarBadge.foreground': colors.bg1,

        // Side Bar - https://code.visualstudio.com/docs/getstarted/theme-color-reference#_side-bar
        'sideBar.background': colors.bg2,
        'sideBar.foreground': colors.fg1,
        'sideBar.border': colors.bg3,
        'sideBar.dropBackground': colors.bg3,
        'sideBarTitle.foreground': colors.fg1,
        'sideBarSectionHeader.background': colors.bg1,
        'sideBarSectionHeader.foreground': colors.fg1,
        'sideBarSectionHeader.border': colors.bg1,

        // Editor Groups & Tabs - https://code.visualstudio.com/docs/getstarted/theme-color-reference#_editor-groups-tabs
        'editorGroup.border': colors.bg3,
        'editorGroup.dropBackground': colors.bg3,
        'editorGroupHeader.noTabsBackground': colors.bg3,
        'editorGroupHeader.tabsBackground': colors.bg2,
        'editorGroupHeader.tabsBorder': colors.bg3,
        'editorGroup.emptyBackground': colors.bg1,
        'editorGroup.focusedEmptyBorder': colors.bg3,
        'tab.activeBackground': colors.bg1,
        'tab.activeForeground': colors.fg1,
        'tab.border': colors.bg3,
        'tab.inactiveBackground': colors.bg2,
        'tab.inactiveForeground': colors.fg2,
        'tab.unfocusedActiveForeground': colors.fg1,
        'tab.unfocusedInactiveForeground': colors.fg2,
        'tab.hoverBackground': colors.bg1,
        'tab.unfocusedHoverBackground': colors.bg1,
        'tab.activeModifiedBorder': colors.orange,
        'tab.inactiveModifiedBorder': colors.fg2,
        'tab.unfocusedActiveModifiedBorder': colors.orange,
        'tab.unfocusedInactiveModifiedBorder': colors.fg2,
        // "tab.activeBorderTop": colors.bg3,
        // "tab.unfocusedActiveBorderTop": colors.bg3,
        // "tab.hoverBorder": colors.bg3,
        // "tab.unfocusedHoverBorder": colors.bg3,

        // Editor Colors - https://code.visualstudio.com/docs/getstarted/theme-color-reference#_editor-colors
        'editor.background': colors.bg1,
        'editor.foreground': colors.fg1,
        'editorLineNumber.foreground': colors.fg3,
        'editorLineNumber.activeForeground': colors.orange,
        'editorCursor.foreground': colors.fg1,
        'editor.selectionBackground': colors.blueDiff,
        'editor.inactiveSelectionBackground': colors.blueDiff,
        'editor.selectionHighlightBackground': colors.cyanDiffEmph,
        'editor.wordHighlightBackground': colors.bg3,
        'editor.wordHighlightStrongBackground': colors.bg3,
        'editor.findMatchBackground': colors.blueDiff,
        'editor.findMatchBorder': colors.blueBright,
        'editor.findMatchHighlightBackground': colors.cyanDiffEmph,
        'editor.findMatchHighlightBorder': colors.cyanDiffEmph,
        'editor.findRangeHighlightBackground': colors.blueDiff,
        // 'editor.findRangeHighlightBorder': colors.blueBright,
        'editor.hoverHighlightBackground': colors.bg3,
        'editor.lineHighlightBackground': colors.bg2,
        // "editor.lineHighlightBorder": colors.bg3,
        'editorLink.activeForeground': colors.blue,
        'editor.rangeHighlightBackground': colors.bg3,
        'editorWhitespace.foreground': colors.fg3,
        'editorIndentGuide.background': colors.bg3,
        'editorIndentGuide.activeBackground': colors.orange,
        'editorRuler.foreground': colors.fg3,
        'editorCodeLens.foreground': colors.fg3,
        'editorBracketMatch.background': colors.bg3,
        // 'editorBracketMatch.border': colors.fg3,
        'editorOverviewRuler.border': colors.bg3,
        // "editor.stackFrameHighlightBackground": colors.red,
        // "editor.focusedStackFrameHighlightBackground": colors.red,
        'editorOverviewRuler.findMatchForeground': colors.bg3,
        'editorOverviewRuler.rangeHighlightForeground': colors.bg3,
        'editorOverviewRuler.selectionHighlightForeground': colors.bg3,
        'editorOverviewRuler.wordHighlightForeground': colors.bg3,
        'editorOverviewRuler.wordHighlightStrongForeground': colors.bg3,
        'editorOverviewRuler.modifiedForeground': colors.cyan,
        'editorOverviewRuler.addedForeground': colors.green,
        'editorOverviewRuler.deletedForeground': colors.red,
        'editorOverviewRuler.errorForeground': colors.redBright,
        'editorOverviewRuler.warningForeground': colors.yellowBright,
        'editorOverviewRuler.infoForeground': colors.cyanBright,
        'editorError.foreground': colors.redBright,
        'editorError.border': colors.bg1,
        'editorWarning.foreground': colors.yellowBright,
        'editorWarning.border': colors.bg1,
        'editorGutter.background': colors.bg1,
        'editorGutter.modifiedBackground': colors.cyan,
        'editorGutter.addedBackground': colors.green,
        'editorGutter.deletedBackground': colors.red,

        // Diff Editor Colors - https://code.visualstudio.com/docs/getstarted/theme-color-reference#_diff-editor-colors
        'diffEditor.insertedLineBackground': colors.greenDiff,
        'diffEditor.removedLineBackground': colors.redDiff,
        'diffEditor.insertedTextBackground': colors.greenDiff,
        'diffEditor.removedTextBackground': colors.redDiff,

        // Editor Widget Colors - https://code.visualstudio.com/docs/getstarted/theme-color-reference#_editor-widget-colors
        'editorWidget.background': colors.bg2,
        'editorWidget.border': colors.bg3,
        'editorSuggestWidget.background': colors.bg2,
        'editorSuggestWidget.border': colors.bg3,
        'editorSuggestWidget.foreground': colors.fg1,
        // "editorSuggestWidget.highlightForeground": colors.red,
        'editorSuggestWidget.selectedBackground': colors.bg3,
        'editorHoverWidget.background': colors.bg2,
        'editorHoverWidget.border': colors.bg3,
        'debugExceptionWidget.background': colors.bg2,
        'debugExceptionWidget.border': colors.bg3,
        'editorMarkerNavigation.background': colors.bg2,
        'editorMarkerNavigationError.background': colors.redBright,
        'editorMarkerNavigationWarning.background': colors.yellowBright,

        // Peek View Colors - https://code.visualstudio.com/docs/getstarted/theme-color-reference#_peek-view-colors
        'peekView.border': colors.bg3,
        'peekViewEditor.background': colors.bg2,
        'peekViewEditorGutter.background': colors.bg2,
        'peekViewEditor.matchHighlightBackground': colors.bg3,
        'peekViewResult.background': colors.bg2,
        'peekViewResult.fileForeground': colors.fg1,
        'peekViewResult.lineForeground': colors.fg1,
        'peekViewResult.matchHighlightBackground': colors.bg3,
        'peekViewResult.selectionBackground': colors.bg3,
        'peekViewResult.selectionForeground': colors.fg1,
        'peekViewTitle.background': colors.bg2,
        'peekViewTitleDescription.foreground': colors.fg2,
        'peekViewTitleLabel.foreground': colors.fg1,

        // Merge Conflicts - https://code.visualstudio.com/docs/getstarted/theme-color-reference#_merge-conflicts
        'merge.currentHeaderBackground': colors.bg2,
        'merge.currentContentBackground': colors.bg2,
        'merge.incomingHeaderBackground': colors.bg2,
        'merge.incomingContentBackground': colors.bg2,
        'merge.border': colors.bg3,
        'editorOverviewRuler.currentContentForeground': colors.red,
        'editorOverviewRuler.incomingContentForeground': colors.red,

        // Panel Colors - https://code.visualstudio.com/docs/getstarted/theme-color-reference#_panel-colors
        'panel.background': colors.bg1,
        'panel.border': colors.bg3,
        'panelTitle.activeBorder': colors.bg3,
        'panelTitle.activeForeground': colors.fg1,
        'panelTitle.inactiveForeground': colors.fg2,

        // Status Bar Colors - https://code.visualstudio.com/docs/getstarted/theme-color-reference#_status-bar-colors
        'statusBar.background': colors.bg2,
        'statusBar.foreground': colors.fg2,
        'statusBar.debuggingBackground': colors.bg1,
        'statusBar.debuggingForeground': colors.fg1,
        'statusBar.noFolderForeground': colors.fg2,
        'statusBar.noFolderBackground': colors.bg1,
        'statusBarItem.activeBackground': colors.bg1,
        'statusBarItem.hoverBackground': colors.bg1,
        'statusBarItem.prominentBackground': colors.bg1,
        'statusBarItem.prominentHoverBackground': colors.bg1,
        'statusBar.border': colors.bg3,

        // Title Bar Colors (macOS) - https://code.visualstudio.com/docs/getstarted/theme-color-reference#_title-bar-colors-macos
        'titleBar.activeBackground': colors.bg1,
        'titleBar.activeForeground': colors.fg2,
        'titleBar.inactiveBackground': colors.bg1,
        'titleBar.inactiveForeground': colors.fg2,
        'titleBar.border': colors.bg3,

        // Notification Dialog Colors - https://code.visualstudio.com/docs/getstarted/theme-color-reference#_notification-colors
        'notificationCenter.border': colors.bg3,
        'notificationCenterHeader.foreground': colors.fg1,
        'notificationCenterHeader.background': colors.bg2,
        'notificationToast.border': colors.bg3,
        'notifications.foreground': colors.fg1,
        'notifications.background': colors.bg2,
        'notifications.border': colors.bg3,
        'notificationLink.foreground': colors.blue,

        // Extensions - https://code.visualstudio.com/docs/getstarted/theme-color-reference#_extensions
        'extensionButton.prominentForeground': colors.bg1,
        'extensionButton.prominentBackground': colors.green,
        'extensionButton.prominentHoverBackground': colors.greenBright,

        // Quick Picker - https://code.visualstudio.com/docs/getstarted/theme-color-reference#_quick-picker
        'pickerGroup.border': colors.bg3,
        'pickerGroup.foreground': colors.fg2,

        // Integrated Terminal Colors - https://code.visualstudio.com/docs/getstarted/theme-color-reference#_integrated-terminal-colors
        'terminal.ansiBlack': colors.bg1,
        'terminal.ansiBrightBlack': colors.fg3,
        'terminal.ansiRed': colors.red,
        'terminal.ansiBrightRed': colors.redBright,
        'terminal.ansiGreen': colors.green,
        'terminal.ansiBrightGreen': colors.greenBright,
        'terminal.ansiYellow': colors.yellow,
        'terminal.ansiBrightYellow': colors.yellowBright,
        'terminal.ansiBlue': colors.blue,
        'terminal.ansiBrightBlue': colors.blueBright,
        'terminal.ansiMagenta': colors.magenta,
        'terminal.ansiBrightMagenta': colors.magentaBright,
        'terminal.ansiCyan': colors.cyan,
        'terminal.ansiBrightCyan': colors.cyanBright,
        'terminal.ansiWhite': colors.fg1,
        'terminal.ansiBrightWhite': colors.fg1,
        'terminal.border': colors.bg3,

        // Welcome Page - https://code.visualstudio.com/docs/getstarted/theme-color-reference#_welcome-page
        'welcomePage.buttonBackground': colors.bg2,
        'welcomePage.buttonHoverBackground': colors.bg3,
        'walkThrough.embeddedEditorBackground': colors.bg2,

        // Git Colors - https://code.visualstudio.com/docs/getstarted/theme-color-reference#_git-colors
        'gitDecoration.modifiedResourceForeground': colors.cyan,
        'gitDecoration.deletedResourceForeground': colors.red,
        'gitDecoration.untrackedResourceForeground': colors.green,
        'gitDecoration.ignoredResourceForeground': colors.fg2,
        'gitDecoration.conflictingResourceForeground': colors.red,

        // Settings Editor Colors - https://code.visualstudio.com/docs/getstarted/theme-color-reference#_settings-editor-colors
        'settings.headerForeground': colors.fg1,
        'settings.modifiedItemIndicator': colors.cyan,
        'settings.dropdownBackground': colors.bg2,
        'settings.dropdownForeground': colors.fg1,
        'settings.dropdownBorder': colors.bg3,
        'settings.checkboxBackground': colors.bg2,
        'settings.checkboxForeground': colors.fg1,
        'settings.checkboxBorder': colors.bg3,
        'settings.textInputBackground': colors.bg2,
        'settings.textInputForeground': colors.fg1,
        'settings.textInputBorder': colors.bg3,
        'settings.numberInputBackground': colors.bg2,
        'settings.numberInputForeground': colors.fg1,
        'settings.numberInputBorder': colors.bg3,

        // Breadcrumbs - https://code.visualstudio.com/docs/getstarted/theme-color-reference#_breadcrumbs
        'breadcrumb.foreground': colors.fg1,
        'breadcrumb.background': colors.bg1,
        'breadcrumb.focusForeground': colors.orange,
        'breadcrumb.activeSelectionForeground': colors.orange,
        'breadcrumbPicker.background': colors.bg2,

        // Snippets - https://code.visualstudio.com/api/references/theme-color#snippets
        // "editor.snippetTabstopHighlightBackground": colors.red,
        // "editor.snippetTabstopHighlightBorder": colors.fg1,
        // "editor.snippetFinalTabstopHighlightBackground": colors.fg1,
        // "editor.snippetFinalTabstopHighlightBorder": colors.fg1

        // GitLens
        'gitlens.gutterForegroundColor': colors.fg3,
        'gitlens.gutterUncommittedForegroundColor': colors.fg3,
        'gitlens.trailingLineForegroundColor': colors.fg3,
    };
}
