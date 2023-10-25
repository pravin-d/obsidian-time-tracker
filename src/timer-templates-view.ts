import TimerTrackerPlugin from './main'
import { ButtonComponent, ItemView, WorkspaceLeaf } from 'obsidian'
import TimerEditModal from './edit-timer-modal'

export const VIEW_TYPE_TEMPLATE = 'time-tracker-template'

export default class TimerTemplateView extends ItemView {
	outputElem: HTMLElement;
	plugin: TimerTrackerPlugin
  timerList: HTMLUListElement;
	timerTable: HTMLTableSectionElement;

	constructor(leaf: WorkspaceLeaf, plugin: TimerTrackerPlugin) {
		super(leaf)
		this.plugin = plugin
	}

	getViewType(): string {
		return VIEW_TYPE_TEMPLATE
	}

	getDisplayText(): string {
		return 'Time Tracker Templates'
	}

	getIcon(): string {
		return 'clock'
	}

	async onOpen(): Promise<void> {
		const { containerEl } = this
		containerEl.empty()

    const table = containerEl.createEl('table')
		table.addClass('time-tracker-template-table')
		this.timerTable = table.createTBody()

		this.refreshTimerList()
    this.registerInterval(window.setInterval(this.refreshTimerList.bind(this), 1000))
	}

  refreshTimerList(): void {
  }
}
