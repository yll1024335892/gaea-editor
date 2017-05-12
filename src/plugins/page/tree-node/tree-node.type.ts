import { StoreProps } from "../../../stores"
import PageAction from "../action"
import PageStore from "../store"

export class Props extends StoreProps<{
  PageAction: PageAction
}, {
    PageStore: PageStore
  }> {
  public instanceKey: string
}
export class State { }