import React from 'react';
import Greeting from './componets/Greeting';
import JsExample from './componets/JsExample';
import UserCArd from './componets/UserCArd';
import UserCardDestractured from './componets/UserCardDestractured';
import ConditionalRendering from './componets/ConditionalRendering';
import ListExample from './componets/ListExample';
import FilteredList from './componets/FilteredList';
// import 'bootstrap/dist/css/bootstrap.min.css';
// componets , jsx  , props , conditional rendering , list and key
// npx create-react-app frontedn


function App() {
  return (
    <div>
      <Greeting />
      <JsExample />
      <UserCArd name='yamen' age='24' email='yamen.nasri123@hotmail.com' />
      <UserCardDestractured  age='24' email='yamen.nasri123@hotmail.com' />
      <ConditionalRendering a='yes' b='17' />
      <ListExample />
      <FilteredList />
    </div>
  );
}

export default App;
