import { mount } from '@vue/test-utils';
import TaskList from '@/components/taskList.vue'; 
import { expect, test } from 'vitest'

test('Message Test', () => {
  const message:string = 'Hi Sherree'
  expect(message).toBe('Hi Sherree')
  })