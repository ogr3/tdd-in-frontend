import { moduleMetadata } from '@storybook/angular'
import {
  Meta,
  Story
} from '@storybook/angular/types-6-0'
import { TestService } from '../test.service'
import { InjectablesComponent } from './injectables.component'

export default {
  title: 'TDD-Labbar/2. InjectablesComponent',
  component: InjectablesComponent
} as Meta<InjectablesComponent>;

const Template: Story<InjectablesComponent> = (args: InjectablesComponent) => ({
  props: {
    ...args,
  },
});

export const WithEmitterAndDataFromService = Template.bind({});
WithEmitterAndDataFromService.args = {};
WithEmitterAndDataFromService.decorators = [
  moduleMetadata({
    providers: [
      // Provide a mock for the @Injectable to be injected into InjectablesComponent
      {
        provide: TestService,
        useValue: {
          getSomeData: () => 'Some mocked data from the mocked TestService'
        }
      }
    ]
  })
];
