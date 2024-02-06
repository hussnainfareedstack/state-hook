import './App.css';
import ClassCondEffectCounter from './components/ClassCondEffectCounter';
import ClassCounter from './components/ClassCounter';
import ClassEffectCounter from './components/ClassEffectCounter';
import ClassMouse from './components/ClassMouse';
import ComponentC from './components/ComponentC';
import CounterOne from './components/CounterOne';
import DataFetching from './components/DataFetching';
import DataFetchingTwo from './components/DataFetchingTwo';
import FuncCondEffectCounter from './components/FuncCondEffectCounter';
import FuncCounterHook from './components/FuncCounterHook';
import HookCounterFour from './components/HookCounterFour';
import HookCounterThree from './components/HookCounterThree';
import HookCounterTwo from './components/HookCounterTwo';
import HookEffectCounter from './components/HookEffectCounter';
import HookMouse from './components/HookMouse';
import IntervalClassCounter from './components/IntervalClassCounter';
import IntervalHookCounter from './components/IntervalHookCounter';
import MouseContainer from './components/MouseContainer';
import { createContext } from 'react';
import React from 'react';
import ParentComponent from './components/ParentComponent';
import Counter from './components/Counter';
import FocusInput from './components/FocusInput';
import ClassTimer from './components/ClassTimer';
import HookTimer from './components/HookTimer';

export const UserContext = React.createContext();
export const ChannelContext = React.createContext()

function App() {
  return (
    <div className="App">


      {/* <HookTimer/>
      <ClassTimer/> */}


      {/* <FocusInput/> */}


      {/* <Counter/> */}


      {/* <ParentComponent/> */}


      {/* <CounterOne/> */}


      {/* <UserContext.Provider value={"Hussnain"}>
        <ChannelContext.Provider value={'Codevolution'}>
          <ComponentC/>
        </ChannelContext.Provider>
      </UserContext.Provider> */}


      {/* <DataFetchingTwo/> */}
      {/* <DataFetching/> */}


      {/* <IntervalHookCounter/> */}
      {/* <IntervalClassCounter/> */}


      {/* <MouseContainer/> */}


      {/* <HookMouse/> */}
      {/* <ClassMouse/> */}


      {/* <FuncCondEffectCounter/> */}
      {/* <ClassCondEffectCounter/> */}


      {/* <HookEffectCounter/> */}
      {/* <ClassEffectCounter/> */}


      {/* <HookCounterFour/> */}
      {/* <HookCounterThree/> */}
      {/* <HookCounterTwo/> */}


      {/* <FuncCounterHook/>
      <ClassCounter/> */}
    </div>
  );
}

export default App;
