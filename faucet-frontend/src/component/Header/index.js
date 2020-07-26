import React, { useContext } from "react";
import { StoreContext } from "../../index";
import Dropdown from "../Dropdown";

const Header = () => {
  const { faucetStore } = useContext(StoreContext);
  const { currentFaucet, faucets } = faucetStore;

  const onFaucetChange = ({ target }) => {
    faucetStore.setCurrentFaucet(target.value);
  };

  return (
    <div className="hm-header">
      <Dropdown
        list={faucets.map((f) => ({ label: f.name, value: f.id }))}
        selected={faucetStore.currentFaucet.id}
        onChange={onFaucetChange}
      />
      <a href="https://harmony.one/">
        <img className="hm-logo" src="/images/harmony-logo.svg" alt="" />
      </a>
    </div>
  );
};

export default Header;
