import React, {createContext, useState, FC, useContext} from "react";

const contextDefaultValues: Api.ColorsContextState = {
    primaryColor: 'white',
    secondaryColor: 'lightblue',
    textColor: 'black',
    setSecondaryColor: () => {},
    setPrimaryColor: () => {},
    setTextColor: () => {},
};

export const ColorsContext = createContext<Api.ColorsContextState>(
    contextDefaultValues
);

export const useColorsContext = () => useContext(ColorsContext);


const ColorsProvider: FC = ({ children }) => {
    const [primaryColor, _setPrimaryColor] = useState<string>(contextDefaultValues.primaryColor);
    const [secondaryColor, _setSecondaryColor] = useState<string>(contextDefaultValues.secondaryColor);
    const [textColor, _setTextColor] = useState<string>(contextDefaultValues.textColor);

    const setPrimaryColor = (color: string) => {
        _setPrimaryColor(color);
        console.log(`Setting primary color to: ${color}`);
    };
    const setSecondaryColor = (color: string) => _setSecondaryColor(color);
    const setTextColor = (color: string) => _setTextColor(color);

    return (
        <ColorsContext.Provider
            value={{
                primaryColor,
                secondaryColor,
                textColor,
                setPrimaryColor,
                setSecondaryColor,
                setTextColor,
            }}
        >
            {children}
        </ColorsContext.Provider>
    );
};

export default ColorsProvider;
