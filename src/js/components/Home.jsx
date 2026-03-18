import SimpleCounter from "./SimpleCounter";
import { calculateSeconds } from "../../lib/time";

const Home = ({ counter }) => {
	return (
		<div className="text-center">
            <SimpleCounter 
				thousandsDigit={calculateSeconds(counter, 1000)}
				hundredsDigit={calculateSeconds(counter, 100)}
				tensDigit={calculateSeconds(counter, 10)}
				onesDigit={calculateSeconds(counter, 1)}
			/>
			{counter}
		</div>
	);
};

export default Home;