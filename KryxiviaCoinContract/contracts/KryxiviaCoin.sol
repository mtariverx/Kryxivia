// SPDX-License-Identifier: MIT

pragma solidity >= 0.8.0;

import "@openzeppelin/contracts/access/AccessControl.sol";
import "@openzeppelin/contracts/utils/Context.sol";
import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/token/ERC20/extensions/ERC20Burnable.sol";

contract KryxiviaCoin is AccessControl, ERC20Burnable {

    // Kryxivia Coin decimal
    uint8 public constant _decimals = 18;
    // Total supply for the Kryxivia coin = 250M
    uint256 private _totalSupply = 250000000 * (10 ** uint256(_decimals));
    // Kryxivia Coin deployer
    address private _kryxiviaCoinDeployer;

    // state of token burn for everyone
    bool _burnEnabled = false;

    constructor(
      string memory name,
      string memory symbol
    ) ERC20(name, symbol) {
        _kryxiviaCoinDeployer = msg.sender;
        _mint(_kryxiviaCoinDeployer, _totalSupply);
    }

    function setBurnState(bool state) public { 
        require(msg.sender == _kryxiviaCoinDeployer, "Unauthorized access");
        _burnEnabled = state;
    }

    /*
    ** Kryxivia Coin (KXA) can be burned which reduce the total token supply
    */
    function burnKXA(uint256 amount) public {
        if (!_burnEnabled) {
            require(msg.sender == _kryxiviaCoinDeployer, "Unauthorized access");
        }

        // players can burn KXA only if it's allowed by the deployer (could be useful later on)
        _burn(msg.sender, amount);
    }
}