import React, { createContext, useContext, useReducer } from 'react';

// Prepares the dataLayer
export const StateContext = createContext();

// Wrap our app & provide the dataLayer

const StateProvider = ({ reducer, initialState, children }) => (
		<StateContext.Provider value={useReducer(reducer, initialState)}>
			{children}
		</StateContext.Provider>
	);

// Pull info from the dataLayer
export const useStateValue = ()=>useContext(StateContext);


export default StateProvider;