import { Clock, Coffee, Package, ShoppingCart } from "phosphor-react";
import { useTheme } from "styled-components";
import { Icon } from "../../components/Icon";
import coffeeBanner from "./../../assets/coffee-banner.svg";
import coffeeCard from "./../../assets/coffee-card.svg";
import { BannerContainer, BannerContent, ItemsGrid } from "./styles";

export function Home() {
  const theme = useTheme();

  return (
    <div>
      {/* BANNER */}
      <BannerContainer>
        <BannerContent>
          <div>
            <h1>Encontre o café perfeito para qualquer hora do dia</h1>
            <p>
              Com o Coffee Delivery você recebe seu café onde estiver, a
              qualquer hora
            </p>

            <ItemsGrid>
              <div>
                <Icon
                  icon={<ShoppingCart weight="fill" />}
                  backgroundColor={theme["yellow-dark"]}
                />
                Compra simples e segura
              </div>

              <div>
                <Icon
                  icon={<Package weight="fill" />}
                  backgroundColor={theme["base-text"]}
                />
                Embalagem mantém o café intacto
              </div>

              <div>
                <Icon
                  icon={<Clock weight="fill" />}
                  backgroundColor={theme["yellow"]}
                />
                Entrega rápida e rastreada
              </div>

              <div>
                <Icon
                  icon={<Coffee weight="fill" />}
                  backgroundColor={theme["purple"]}
                />
                Embalagem mantém o café intacto
              </div>
            </ItemsGrid>
          </div>
          <div>
            <img src={coffeeBanner} />
          </div>
        </BannerContent>
      </BannerContainer>

      {/* MAIN */}
      <div>
        <h1>Nossos cafés</h1>

        {/* CARDS WRAPPER */}
        <div>
          {/* CARD */}
          <div>
            <img src={coffeeCard} alt="" />
            <div>Tradicional</div>

            <h1>Expresso Tradicional</h1>
            <p>O tradicional café feito com água quente e grãos moídos</p>

            <div>
              <span>R$ 9,90</span>
              <input type="number" />
              <button>
                <ShoppingCart />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
