import {
  Meta,
  Story
} from '@storybook/angular'
import {
  userEvent,
  within
} from '@storybook/testing-library'
import { MessageButton } from './message-button.component'

export default {
  title: 'TDD-Labbar/3. MessageButton',
  component: MessageButton
} as Meta

const Template: Story<MessageButton> = (args: MessageButton) => ({
  props: args,
})

export const A_BeforeClick = Template.bind({})

// More on interaction testing: https://storybook.js.org/docs/angular/writing-tests/interaction-testing
export const B_AfterClick = Template.bind({})
B_AfterClick.play = async ({canvasElement}) => {
  const canvas = within(canvasElement)
  const button = canvas.getByRole('button', {name: /Klicka/i})
  userEvent.click(button)
}
