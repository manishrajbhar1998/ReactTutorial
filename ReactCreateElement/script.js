

let h1 = React.createElement("h1",{id:"heading-h1"},"Heading One")
let h2 = React.createElement("h2",{id:"heading-h2"},"Heading Two")
let parent = React.createElement("div",{id:"parent"},[h1,h2])

let root = ReactDOM.createRoot(document.querySelector("#root"));
root.render(parent)
