// SPDX-License-Identifier: MIT

pragma solidity >= 0.8.0;

import "@openzeppelin/contracts/access/AccessControl.sol";
import "@openzeppelin/contracts/utils/Context.sol";
import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/token/ERC20/extensions/ERC20Burnable.sol";

contract KryxitShard is AccessControl, ERC20Burnable {

    // Kryxivia Coin decimal
    uint8 public constant _decimals = 18;
    // Total supply for the Kryxit shard: 5 billions
    uint256 private _totalSupply = 5000000000 * (10 ** uint256(_decimals));
    // Kryxivia Coin deployer
    address private _kryxitShardDeployer;

    // state of token burn for everyone
    bool _burnEnabled = false;

    constructor(
      string memory name,
      string memory symbol
    ) ERC20(name, symbol) {
        _kryxitShardDeployer = msg.sender;
        _mint(_kryxitShardDeployer, _totalSupply);
    }

    function setBurnState(bool state) public { 
        require(msg.sender == _kryxitShardDeployer, "Unauthorized access");
        _burnEnabled = state;
    }

    /*
    ** Kryxivia Coin (KXS) can be burned which reduce the total token supply
    */
    function burnKXS(uint256 amount) public {
        if (!_burnEnabled) {
            require(msg.sender == _kryxitShardDeployer, "Unauthorized access");
        }

        // players can burn KXS only if it's allowed by the deployer (could be useful later on)
        _burn(msg.sender, amount);
    }

    /*
    ** Allow the deployer to mint KXS token in-case it is needed in-game
    */
    function mintKXS(uint256 amount) public {
        require(msg.sender == _kryxitShardDeployer, "Unauthorized access");
        _mint(_kryxitShardDeployer, amount);
    }
}