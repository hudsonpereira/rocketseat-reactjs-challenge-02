import { Clock, Coffee, Package, ShoppingCart } from "phosphor-react";
import { useTheme } from "styled-components";
import { Icon } from "../../components/Icon";
import { NumberInput } from "../../components/NumberInput";
import coffeeBanner from "./../../assets/coffee-banner.svg";
import coffeeCard from "./../../assets/coffee-card.svg";
import {
  BannerContainer,
  BannerContent,
  Card,
  CardFooter,
  CardsWrapper,
  ItemsGrid,
  MainWrapper,
  Tags,
} from "./styles";

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
                  icon={<ShoppingCart weight="fill" color="white" />}
                  backgroundColor={theme["yellow-dark"]}
                />
                Compra simples e segura
              </div>

              <div>
                <Icon
                  icon={<Package weight="fill" color="white" />}
                  backgroundColor={theme["base-text"]}
                />
                Embalagem mantém o café intacto
              </div>

              <div>
                <Icon
                  icon={<Clock weight="fill" color="white" />}
                  backgroundColor={theme["yellow"]}
                />
                Entrega rápida e rastreada
              </div>

              <div>
                <Icon
                  icon={<Coffee weight="fill" color="white" />}
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
      <MainWrapper>
        <h1>Nossos cafés</h1>

        {/* CARDS WRAPPER */}
        <CardsWrapper>
          {/* CARD */}
          <Card>
            <img src={coffeeCard} alt="" />
            <Tags>
              <span>Tradicional</span>
              <span>Tradicional</span>
            </Tags>

            <h2>Expresso Tradicional</h2>
            <p>O tradicional café feito com água quente e grãos moídos</p>

            <CardFooter>
              <span>9,90</span>
              <NumberInput />
              <button>
                <ShoppingCart size={22} weight="fill" />
              </button>
            </CardFooter>
          </Card>

          <Card>
            <img src={coffeeCard} alt="" />
            <Tags>
              <span>Tradicional</span>
              <span>Tradicional</span>
            </Tags>

            <h2>Expresso Tradicional</h2>
            <p>O tradicional café feito com água quente e grãos moídos</p>

            <CardFooter>
              <span>9,90</span>
              <NumberInput />
              <button>
                <ShoppingCart size={22} weight="fill" />
              </button>
            </CardFooter>
          </Card>
          <Card>
            <img src={coffeeCard} alt="" />
            <Tags>
              <span>Tradicional</span>
              <span>Tradicional</span>
            </Tags>

            <h2>Expresso Tradicional</h2>
            <p>O tradicional café feito com água quente e grãos moídos</p>

            <CardFooter>
              <span>9,90</span>
              <NumberInput />
              <button>
                <ShoppingCart size={22} weight="fill" />
              </button>
            </CardFooter>
          </Card>
          <Card>
            <img src={coffeeCard} alt="" />
            <Tags>
              <span>Tradicional</span>
              <span>Tradicional</span>
            </Tags>

            <h2>Expresso Tradicional</h2>
            <p>O tradicional café feito com água quente e grãos moídos</p>

            <CardFooter>
              <span>9,90</span>
              <NumberInput />
              <button>
                <ShoppingCart size={22} weight="fill" />
              </button>
            </CardFooter>
          </Card>
          <Card>
            <img src={coffeeCard} alt="" />
            <Tags>
              <span>Tradicional</span>
              <span>Tradicional</span>
            </Tags>

            <h2>Expresso Tradicional</h2>
            <p>O tradicional café feito com água quente e grãos moídos</p>

            <CardFooter>
              <span>9,90</span>
              <NumberInput />
              <button>
                <ShoppingCart size={22} weight="fill" />
              </button>
            </CardFooter>
          </Card>
        </CardsWrapper>
      </MainWrapper>
    </div>
  );
}
