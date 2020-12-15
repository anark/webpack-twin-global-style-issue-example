import React from 'react'
import tw, { GlobalStyles } from 'twin.macro'
import { Input } from './components'

// const Input = styled.input.attrs(() => ({ type: 'text' }))(() => [
//   tw`shadow-md focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm border-gray-300 rounded-lg focus:z-10`
// ])

//testing if it changes at all
const App = () => (
  <div>
    <GlobalStyles />
    <div css={[tw`flex flex-col items-center justify-center h-screen`]}>
      <div tw="flex flex-col justify-center h-full space-y-5">
        <label> css prop on input element. This one works</label>
        <input type='text' css={tw`shadow-md focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm border-gray-300 rounded-lg focus:z-10`} />

        <label>Same thing but imported from a different file and it doesn't work</label>
        <Input />
      </div>
    </div>
  </div>
)

export default App
