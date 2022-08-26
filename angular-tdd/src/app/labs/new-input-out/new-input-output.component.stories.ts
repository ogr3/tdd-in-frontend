import {NewInputOutputComponent} from "./new-input-output.component";
import {Meta, Story} from "@storybook/angular/types-6-0";
import {action} from "@storybook/addon-actions";
import {moduleMetadata} from "@storybook/angular";
import {TestService} from "../test.service";
import {userEvent, within} from "@storybook/testing-library";
import {HttpClient, HttpClientModule} from "@angular/common/http";
import {of as observableOf} from 'rxjs'

export default {
  title: 'LAB/NewInputOutputComponent',
  component: NewInputOutputComponent,
  decorators: [
    moduleMetadata({
      imports: [HttpClientModule]
    })
  ]
} as Meta<NewInputOutputComponent>

const Template: Story<NewInputOutputComponent> = (args: NewInputOutputComponent) => ({
  props: {
    ...args,
    myOutput: action('MyOutput')
  }
})

export const Basic = Template.bind({})

Basic.args = {
  myInput: 'kaka'
}

export const WithInjectedData = Template.bind({})

WithInjectedData.decorators = [
  moduleMetadata({
    providers: [
      {
        provide: TestService,
        useValue: {
          getSomeData: () => 'Apa'
        } as TestService
      }
    ]
  })
]

export const AfterEmitClick = Template.bind({})
AfterEmitClick.play = async ({canvasElement}) => {
  const canvas = within(canvasElement)
  const emitButton = canvas.getByRole('button', {name: "Emit"})
  userEvent.click(emitButton)
}

export const WithBackendPost = Template.bind({})
WithBackendPost.decorators = [
  moduleMetadata({
    providers: [
      {
        provide: HttpClient,
        useValue: {
          post: (url: string, body: any) => {
            action('POST')(url, JSON.stringify(body))
            return observableOf(null)
          }
        } as HttpClient
      }
    ]
  })
]
