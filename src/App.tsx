import * as $ from 'jquery';
import 'materialize-css';
import * as React from 'react';
import Button from './components/Button';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';
import Header from './components/Header';

const navigation = {
  _about: "string;",
  _blog: "string;",
  _contact: "string;",
  _projects: "string;",
  _smart: "string;",
}

const a = $;
console.log(a);

class App extends React.Component {
  public render() {
    return (
      <div className="App">
        <Header navigation={navigation}/>
        <ContactForm />
        <Footer />
        <Button text="Hello" type="button" />
      </div>
    );
  }
}

export default App;
