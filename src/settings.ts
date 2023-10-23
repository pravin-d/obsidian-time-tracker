export default interface TimerTrackerPluginSettings {
	approximation: number;
	pomodoroDuration: number;
	storageFile: string;
	enableStatusBar: boolean;
	storageTemplate: string;
}

export const DEFAULT_SETTINGS: TimerTrackerPluginSettings = {
	approximation: 0,
	pomodoroDuration: 5 * 60,
	storageFile: 'TimeTracker',
	enableStatusBar: true,
	storageTemplate: '',
}
