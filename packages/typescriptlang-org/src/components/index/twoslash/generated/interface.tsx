// Auto-generated by yarn workspace typescriptlang-org compile-index-examples
import React from "react"

const innerHTML = `<div class="language-id">tsx</div><div class='code-container'><code><span style="color: #569CD6">interface</span><span style="color: #D4D4D4"> <data-lsp lsp='interface User'>User</data-lsp> {</span>
<span style="color: #D4D4D4">  <data-lsp lsp='(property) User.id: number'>id</data-lsp>: number</span>
<span style="color: #D4D4D4">  <data-lsp lsp='(property) User.firstName: string'>firstName</data-lsp>: string</span>
<span style="color: #D4D4D4">  <data-lsp lsp='(property) User.lastName: string'>lastName</data-lsp>: string</span>
<span style="color: #D4D4D4">  <data-lsp lsp='(property) User.role: string'>role</data-lsp>: string</span>
<span style="color: #D4D4D4">}</span>

<span style="color: #569CD6">function</span><span style="color: #D4D4D4"> <data-lsp lsp='function updateUser(id: number, update: Partial&amp;lt;User>): void'>updateUser</data-lsp>(<data-lsp lsp='(parameter) id: number'>id</data-lsp>: number, <data-lsp lsp='(parameter) update: Partial&amp;lt;User>'>update</data-lsp>: <data-lsp lsp='type Partial&amp;lt;T> = { [P in keyof T]?: T[P] | undefined; }'>Partial</data-lsp>&lt;<data-lsp lsp='interface User'>User</data-lsp>>) {</span>
<span style="color: #D4D4D4">  </span><span style="color: #569CD6">const</span><span style="color: #D4D4D4"> <data-lsp lsp='const user: User'>user</data-lsp> = <data-lsp lsp='function getUser(id: number): User'>getUser</data-lsp>(<data-lsp lsp='(parameter) id: number'>id</data-lsp>)</span>
<span style="color: #D4D4D4">  </span><span style="color: #569CD6">const</span><span style="color: #D4D4D4"> <data-lsp lsp='const newUser: {&amp;#13;    id: number;&amp;#13;    firstName: string;&amp;#13;    lastName: string;&amp;#13;    role: string;&amp;#13;}'>newUser</data-lsp> = {...<data-lsp lsp='const user: User'>user</data-lsp>, ...<data-lsp lsp='(parameter) update: Partial&amp;lt;User>'>update</data-lsp>}  </span>
<span style="color: #D4D4D4">  <data-lsp lsp='function saveUser(id: number, user: User): User'>saveUser</data-lsp>(<data-lsp lsp='(parameter) id: number'>id</data-lsp>, <data-lsp lsp='const newUser: {&amp;#13;    id: number;&amp;#13;    firstName: string;&amp;#13;    lastName: string;&amp;#13;    role: string;&amp;#13;}'>newUser</data-lsp>)</span>
<span style="color: #D4D4D4">}</span></code><a href='https://www.typescriptlang.org/play/#code/PQKhAIHsDsFNzMAUAE1gYwDYEMBO8AzAV2nQBcBLGcAc1jIFUBnWXACgpQC5xoiBbAEasAlD2askoCGQDukBCGRoseQiXJVo4JtgBusCe048+Q1gBpwRFrnG2x4I1ODgAtB-REyHt0grQZKwE2OjwRuAA3kjg4Ca8AsK4MeAEFLhMZABy2PywPJm4ATQpOJk5eQVkRdAlsbiQmPk61cVIAL5ISMSklNREAA4o2EFGHNwJ5rhWg8NBPAAKeJTYmAA8RgB8IlEp6DCZ1rbgALy09GOcInsHZLywshFnkQB0bzaW4G8vsyOw7bEUroDJcUFY4I8HB0kEA'>Try</a></div>`

export const InterfaceExample = () => <pre className='shiki lsp twoslash' dangerouslySetInnerHTML={{ __html: innerHTML }} />