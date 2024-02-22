import React from 'react';
import logo from './static/logo.svg';
import styles from 'styles/App.module.scss';
import StepperContainer from "components/StepperContainer";
import AutocompleteUser from "components/AutocompleteUser";
import WaterMark from "components/WaterMark";
import Table from "components/Table";
import DataTableOne from "static/table.one.consts";
import DataTableTwo from "static/table.two.consts";
import {selectedTableOneAtom, selectedTableTwoAtom} from "./store/atoms";
import {useRecoilState} from "recoil";

function App() {
    const [selectedItemsOne, setSelectedItemsOne] = useRecoilState(selectedTableOneAtom);
    const [selectedItemsTwo, setSelectedItemsTwo] = useRecoilState(selectedTableTwoAtom);

    React.useEffect(() => {
        console.log("|" + selectedItemsOne)
        console.log("||" + selectedItemsTwo)
    }, [selectedItemsOne ,selectedItemsTwo])

    const content = [
        <div key={1}><AutocompleteUser/></div>,
        <div key={2}><WaterMark/></div>,
        <h1 key={3}>
            <Table
                leftColText={DataTableOne.leftColText}
                detailes={DataTableOne.detailes}
                selectedItems={selectedItemsOne}
                setSelectedItems={setSelectedItemsOne}
            />
        </h1>,
        <h2 key={4}>
            <Table
                leftColText={DataTableTwo.leftColText}
                detailes={DataTableTwo.detailes}
                selectedItems={selectedItemsTwo}
                setSelectedItems={setSelectedItemsTwo}
            />
        </h2>,
    ];

  return (
    <div className={styles.container}>
        {/*<img src={logo} alt="logo" />*/}
        <StepperContainer>
            {content}
        </StepperContainer>
    </div>
  );
}

export default App;
