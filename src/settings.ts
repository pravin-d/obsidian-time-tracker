export default interface TimerTrackerPluginSettings {
	approximation: number;
	pomodoroDuration: number;
	storageFile: string;
	enableStatusBar: boolean;
	storageTemplate: string;
	saveAsListItem: boolean;
}

export const DEFAULT_SETTINGS: TimerTrackerPluginSettings = {
	approximation: 0,
	pomodoroDuration: 5 * 60,
	storageFile: 'TimeTracker',
	enableStatusBar: true,
	storageTemplate: '',
	saveAsListItem: false,
}
