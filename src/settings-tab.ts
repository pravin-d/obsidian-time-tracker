import { App, PluginSettingTab, Setting } from 'obsidian'
import TimerTrackerPlugin from './main'

export default class TimeTrackerIssueSettingTab extends PluginSettingTab {
  plugin: TimerTrackerPlugin;

  constructor(app: App, plugin: TimerTrackerPlugin) {
    super(app, plugin)
    this.plugin = plugin
  }

  async display(): Promise<void> {
    const { containerEl } = this
    containerEl.empty()
    containerEl.addClass('time-tracker-settings-modal');

    new Setting(containerEl)
      .setName('Timer approximation')
      .setDesc('Round spent time')
      .addDropdown(dropdown => dropdown
        .addOptions({
          '0': 'disabled',
          '60': '1 minute',
          '300': '5 minutes',
          '600': '10 minutes',
          '900': '15 minutes'
        })
        .setValue(this.plugin.settings.approximation.toString())
        .onChange(async (value) => {
          this.plugin.settings.approximation = parseInt(value)
          await this.plugin.saveSettings()
        }))

    new Setting(containerEl)
      .setName('Pomodoro duration')
      .setDesc('The duration of pomodoro timer')
      .addDropdown(dropdown => dropdown
        .addOptions({
          '300': '5 minutes',
          '900': '15 minutes',
          '1500': '25 minutes',
          '1800': '30 minutes',
        })
        .setValue(this.plugin.settings.pomodoroDuration.toString())
        .onChange(async (value) => {
          this.plugin.settings.pomodoroDuration = parseInt(value)
          await this.plugin.saveSettings()
        }))

    new Setting(containerEl)
      .setName('Storage file')
      .setDesc('The path of file used to store saved timers')
      .addText(text => text
        .setValue(this.plugin.settings.storageFile)
        .onChange(async (value) => {
          this.plugin.settings.storageFile = value
          await this.plugin.saveSettings()
        }))

    new Setting(containerEl)
      .setName('Status bar item')
      .setDesc('Enable the status bar item for current running timer')
      .addToggle(toggle => toggle
        .setValue(this.plugin.settings.enableStatusBar)
        .onChange(async (value) => {
          this.plugin.settings.enableStatusBar = value
          await this.plugin.saveSettings()
        }))

    const templateSettingsEl = new Setting(containerEl)
      .setName('Timer Storage template')
      .setDesc('Template used when saving the timer result')
      .addTextArea(textArea => {
        textArea
        .setValue(this.plugin.settings.storageTemplate)
        .onChange(async (value) => {
          this.plugin.settings.storageTemplate = value
          await this.plugin.saveSettings()
        })
        textArea.inputEl.rows = 6;
        textArea.inputEl.cols = 25;
        textArea.inputEl.addClass('width100');
      })
      templateSettingsEl.settingEl.addClasses(['flex-dir-col', 'flex-align-items-start']);
      templateSettingsEl.controlEl.addClass('width100');

    new Setting(containerEl)
      .setName('Save Timer as list item')
      .setDesc('This will save the item in a list')
      .addToggle(toggle => toggle
        .setValue(this.plugin.settings.saveAsListItem)
        .onChange(async (value) => {
          this.plugin.settings.saveAsListItem = value
          await this.plugin.saveSettings()
        }))
  }
}
