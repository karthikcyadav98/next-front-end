import React from "react";
import {
  Container,
  Divider,
  Grid,
  Button,
  Image,
  Header,
  Icon,
  Label
} from "semantic-ui-react";
import HomeImg from "../img/home.png";
import overtime from "../img/overtime.png";
import weekend from "../img/weekend.png";
import money from "../img/money2.png";
import { CustomText, P, ColorText, CustomDivider } from "./MasterCommon";
import Theme from "./ThemeColor";
const Homepage = () => (
  <Container>
    {/* Heads background-color: #252839 !important; up! We apply there some custom styling, you usually will not need it. */}

    <Grid style={{ textAlign: "center" }}>
      <Grid.Row>
        <Grid.Column mobile={16} tablet={6} computer={8} widescreen={8}>
          <img src={HomeImg} />
        </Grid.Column>
        <Grid.Column mobile={16} tablet={6} computer={8} widescreen={8}>
          <div>
            <CustomText
              color={Theme.Color.Base}
              title="Hi, Reader"
              textAlign="center"
              fontWeight="300"
              fontSize="18px"
              textTransform="capitalize"
              lineHeight="50px"
              margin="25% 0px 0px 0px"
            />
            <p
              style={{
                textAlign: "center",
                fontSize: "18px",

                fontWeight: "100",
                fontStyle: "underline"
              }}
            >
              Behind Every{" "}
              <b style={{ color: Theme.Color.Base, fontWeight: "bold" }}>
                UNHAPPY EMPLOYEE
              </b>
              <br />
              Their is a{" "}
              <b style={{ color: Theme.Color.Primary, fontWeight: "bold" }}>
                COMPANY
              </b>
              <br />
              join the moment with us
            </p>
            <Button color="facebook">
              <Icon name="facebook" /> Facebook
            </Button>

            <Button color="google plus">
              <Icon name="google plus" /> Google Plus
            </Button>
          </div>
        </Grid.Column>

        <Grid.Column width={16}>
          <p
            style={{
              textAlign: "center",
              fontSize: "20px",

              fontWeight: "100"
            }}
          >
            Are You Suffring From{" "}
            <b style={{ color: Theme.Color.Base, fontWeight: "bold" }}>
              699ICU
            </b>
            <b style={{ color: Theme.Color.Primary, fontWeight: "bold" }}>
              {" "}
              Lets Know More
            </b>
          </p>
        </Grid.Column>
      </Grid.Row>
      <CustomDivider marginTop="10%" />
      <Grid.Row>
        <Grid.Column mobile={16} tablet={6} computer={8} widescreen={8}>
          <img src={overtime} />
        </Grid.Column>
        <Grid.Column mobile={16} tablet={6} computer={8} widescreen={8}>
          <CustomDivider marginTop="8%" />
          <ColorText
            titleMain="Are you the one who"
            lineHeightMain="30px"
            fontWeightMain="100"
            fontSizeMain="16px"
            fontSizeMain2="22px"
            textTransformMain="uppercase"
            colorMain={Theme.Color.grey}
            colorMain2={Theme.Color.Base}
            colorMain3={Theme.Color.Primary}
            titleMain2="work More than "
            titleMain3="9 Hours"
            lineHeightMain3="100px"
            fontSizeMain3="44px"
            fontWeightMain3="300"
            fontFamilyMain3="fantasy"
          />
          <Button as="div" labelPosition="right">
            <Button color="green">
              <Icon name="thumbs up" />
              Yes
            </Button>
            <Label as="a" basic color="green" pointing="left">
              2,048
            </Label>
          </Button>
          <Button as="div" labelPosition="right">
            <Button color="black">
              <Icon name="thumbs down" />
              NO
            </Button>
            <Label as="a" basic color="black" pointing="left">
              2,048
            </Label>
          </Button>
        </Grid.Column>
      </Grid.Row>

      <Grid.Row>
        <Grid.Column mobile={16} tablet={6} computer={8} widescreen={8}>
          <CustomDivider marginTop="20%" />
          <ColorText
            titleMain="Are you the one who"
            lineHeightMain="30px"
            fontWeightMain="100"
            fontSizeMain="16px"
            fontSizeMain2="22px"
            textTransformMain="uppercase"
            colorMain="grey"
            colorMain2={Theme.Color.Base}
            colorMain3={Theme.Color.Primary}
            titleMain2="Having Only  "
            titleMain3="1 off in a Week "
            lineHeightMain3="100px"
            fontSizeMain3="44px"
            fontWeightMain3="300"
            fontFamilyMain3="fantasy"
          />
          <Button as="div" labelPosition="right">
            <Button color="green">
              <Icon name="thumbs up" />
              Yes
            </Button>
            <Label as="a" basic color="green" pointing="left">
              2,048
            </Label>
          </Button>
          <Button as="div" labelPosition="right">
            <Button color="black">
              <Icon name="thumbs down" />
              NO
            </Button>
            <Label as="a" basic color="black" pointing="left">
              2,048
            </Label>
          </Button>
        </Grid.Column>
        <Grid.Column mobile={16} tablet={6} computer={8} widescreen={8}>
          <img src={weekend} />
        </Grid.Column>
      </Grid.Row>

      <Grid.Row>
        <Grid.Column mobile={16} tablet={6} computer={8} widescreen={8}>
          <CustomDivider marginTop="10%" />
          <ColorText
            titleMain="Are you the one who"
            lineHeightMain="30px"
            fontWeightMain="100"
            fontSizeMain="16px"
            fontSizeMain2="22px"
            textTransformMain="uppercase"
            colorMain="grey"
            colorMain2={Theme.Color.Base}
            colorMain3={Theme.Color.Primary}
            titleMain2="getting less Then"
            titleMain3="  Industry Standards Pay"
            lineHeightMain3="70px"
            fontSizeMain3="30px"
            fontWeightMain3="300"
            fontFamilyMain3="fantasy"
          />
          <Button as="div" labelPosition="right">
            <Button color="green">
              <Icon name="thumbs up" />
              Yes
            </Button>
            <Label as="a" basic color="green" pointing="left">
              2,048
            </Label>
          </Button>
          <Button as="div" labelPosition="right">
            <Button color={Theme.Color.Base}>
              <Icon name="thumbs down" />
              NO
            </Button>
            <Label as="a" basic color="black" pointing="left">
              2,048
            </Label>
          </Button>
        </Grid.Column>
        <Grid.Column mobile={16} tablet={6} computer={8} widescreen={8}>
          <img src={money} />
        </Grid.Column>
      </Grid.Row>
    </Grid>
  </Container>
);

export default Homepage;
