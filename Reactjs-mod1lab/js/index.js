function AppTitle(props) {
  return (
    React.createElement("div", null,
      React.createElement("h2", null, props.appTitle),
      React.createElement("p", null, props.appDesc)));


}



function SelectOptionsDetails(props) {
  return (
    React.createElement("div", null,
      React.createElement("h2", null, props.selectOptionsTitle),
      props.filterOption,
      React.createElement("input", { type: "checkbox", id: "coding", name: "interest", value: "coding", checked: true }),
      React.createElement("select", null,
        React.createElement("option", { value: "All" }, props.optionValue[0]),
        React.createElement("option", { value: "Cars" }, props.optionValue[1]),
        React.createElement("option", { value: "Trucks" }, props.optionValue[2]),
        React.createElement("option", { value: "Convertibles" }, props.optionValue[3]))));



}



function ResultFullDetails(props) {
  return (
    React.createElement("div", null,
      React.createElement("h2", null, props.resultFullDetails[0]),
      React.createElement("ul", null,
        React.createElement("table", null,
          React.createElement("tr", null,
            React.createElement("th", null, "Year"),
            React.createElement("th", null, "Model"),
            React.createElement("th", null, "Price"),
            React.createElement("th", null, "Buy")),

          React.createElement("tr", null,
            React.createElement("td", null, props.resultFullDetails[1]),
            React.createElement("td", null, props.resultFullDetails[2]),
            React.createElement("td", null, props.resultFullDetails[3]),
            React.createElement("td", null, React.createElement("button", null, "Buy Now")))))));





}



function ResultsContinued(props) {
  return (
    React.createElement("div", null,
      React.createElement("ul", null,
        React.createElement("table", null,
          React.createElement("tr", null,
            React.createElement("th", null, "Year"),
            React.createElement("th", null, "Model"),
            React.createElement("th", null, "Price"),
            React.createElement("th", null, "Buy")),

          React.createElement("tr", null,
            React.createElement("td", null, props.resultContinuedDetails[0]),
            React.createElement("td", null, props.resultContinuedDetails[1]),
            React.createElement("td", null, props.resultContinuedDetails[2]),
            React.createElement("td", null, React.createElement("button", null, "Buy Now")))))));





}



/*Application*/
function ReactTransApp() {
  return (
    React.createElement("div", null,
      React.createElement(AppTitle, { appTitle: "Welcome to React Transportation", appDesc: "The best place to buy vehicles online" }),
      React.createElement(SelectOptionsDetails, { SelectOptionsTitle: "Choose Options", filterOption: "New Only", optionValue: ["All", "Cars", "Trucks", "Convertibles"] }),
      React.createElement(ResultFullDetails, { resultFullDetails: ["Cars", "2013", "A", "$32,000"] }),
      React.createElement(ResultsContinued, { resultContinuedDetails: ["2011", "B", "$4,400"] }),
      React.createElement(ResultsContinued, { resultContinuedDetails: ["2016", "B", "$15,500"] }),

      React.createElement(ResultFullDetails, { resultFullDetails: ["trucks", "2014", "D", "$18,000"] }),
      React.createElement(ResultsContinued, { resultContinuedDetails: ["2013", "E", "$5,200"] }),

      React.createElement(ResultFullDetails, { resultFullDetails: ["Convertibles", "2009", "F", "$2,000"] }),
      React.createElement(ResultsContinued, { resultContinuedDetails: ["2010", "G", "$6,000"] }),
      React.createElement(ResultsContinued, { resultContinuedDetails: ["2012", "H", "$12,500"] }),
      React.createElement(ResultsContinued, { resultContinuedDetails: ["2017", "M", "$50,000"] })));


}



/*Rendering*/
ReactDOM.render(React.createElement(ReactTransApp, null), document.getElementById("root"));