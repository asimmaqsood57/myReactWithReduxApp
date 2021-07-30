import { connect } from "react-redux";
import Home from "../components/Home";

// import Constants from "../services/Constants";

import { addToCart } from "../services/actions/Actions";
import { Actions } from "../services/actions/Actions";

const mapStateToProps = (state) => ({});

const mapDispatchToProps = (dispatch = () => {
  addToCartHandler: (data) => dispatch(addToCart(data));
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);

// export default Home;
