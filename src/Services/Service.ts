import Web3 from "web3";
import ABI from './ABI.json';


class Service {
    web3 = new Web3("http://localhost:8545")
    contract = new this.web3.eth.Contract(ABI as any, "0xDc64a140Aa3E981100a9becA4E685f962f0cF6C9");
    async auth(login: string, password: string, address: string) {
        try {
            return await this.contract.methods.authorisation(login, password).call({ from: address })
        } catch (error) {
            console.log(error);
        }
    }
}
export default new Service()