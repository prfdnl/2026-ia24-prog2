export type ItemProps = {
  id?: number
  title: string
}

class Item {
  protected id: number | null
  protected changed: boolean = false
  protected props: ItemProps

  constructor(props: Partial<ItemProps>) {
    this.id = null
    this.props = Object.assign({ title: '' }, props)
  }

  set title(title: string) {
    this.props.title = title
    this.changed = true
  }

  get title(): string {
    return this.props.title
  }

  store() {
    if (!this.changed) 
      return
  }

  toJSON() {
    return {
      id: this.id,
      title: this.props.title
    }
  }
}