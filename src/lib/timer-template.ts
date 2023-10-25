
export type TemplateParams = {
  id: string;
  template: string;
  storageFile: string;
}

export class TimerTemplate {
  id: string
  template: string
  storageFile: string

  constructor({id, template, storageFile}: Partial<TemplateParams>) {
    this.id = id
    this.template = template
    this.storageFile = storageFile
    debugger
  }
}

export default class TimerTemplateManager {
  templates: TimerTemplate[]

  add(timerTemplate: TimerTemplate) {
    this.templates.push(timerTemplate)
  }
  dump() {
    return this.templates.map((timerTemplate) => ({
      id: timerTemplate.id,
      template: timerTemplate.template,
      storageFile: timerTemplate.storageFile,
    }))
  }
}

