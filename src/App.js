const Pet = ({ name, animal, breed }) => {
  return React.createElement("div", {}, [
    React.createElement("h1", {}, name),
    React.createElement("h2", {}, animal),
    React.createElement("h2", {}, breed),
  ]);
};

const App = () => {
  return React.createElement("div", {}, [
    React.createElement("h1", {}, "Adopt Me!"),
    React.createElement(Pet, {
      name: "Piper",
      animal: "Dog",
      breed: "Poodle Mix",
    }),
    React.createElement(Pet, {
      name: "Bruno",
      animal: "Dog",
      breed: "Hound Mutt",
    }),
    React.createElement(Pet, {
      name: "Cheetah",
      animal: "Cat",
      breed: "Tabby",
    }),
  ]);
};

ReactDOM.render(React.createElement(App), document.getElementById("root"));
