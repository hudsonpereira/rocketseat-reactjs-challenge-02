import { MapPin, ShoppingCart } from "phosphor-react";
import logo from "./../../assets/logo.svg";
import {
  HeaderWrapper,
  LocationButton,
  CartButton,
  ActionsWrapper,
} from "./styles";

export function Header() {
  return (
    <HeaderWrapper>
      <div>
        <img src={logo} alt="" />
      </div>
      <ActionsWrapper>
        <LocationButton>
          <MapPin size={22} weight="fill" /> Porto Alegre, RS
        </LocationButton>
        <CartButton>
          <ShoppingCart size={22} weight="fill" />
        </CartButton>
      </ActionsWrapper>
    </HeaderWrapper>
  );
}
