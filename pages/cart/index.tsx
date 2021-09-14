import React from "react";

//Components
import { Grid12 , Grid3 , Grid9 } from "../../extra/components/common/grid";
import { Resume } from "../../extra/components/pages/cart/components/resume";
import { Header } from "../../extra/components/common/header";
import { TypographyCustom } from "../../extra/components/common/typography";
import { NotResult } from "../../extra/components/common/notResult";
import { Item } from "../../extra/components/pages/cart/components/item";

//hooks
import { useWindowSize } from "../../extra/hooks/useWindowSize";

//Redux
import { useAppSelector } from "../../extra/redux/hooks";
import { selectCart } from "../../extra/redux/features/cart";

//I18N
import intl from "react-intl-universal";

//Interfaces
import { ItemsState } from "../../extra/interfaces/cartState";

//Icons
import { ShoppingCartOutlined } from "@material-ui/icons";

export default function ViewCart(){
    const size = useWindowSize()
    const cart = useAppSelector(selectCart)

    return(
        <Grid12>
            <Grid12>
                <Header back={true}/>
            </Grid12>
            <Grid9 justifyContent={'center'}
                   style={{padding:20,paddingTop:70}}>
                <TypographyCustom variant={'h1'} style={{paddingTop:20}}>
                    {intl.get('basket')}
                </TypographyCustom>
                {cart.items !== undefined ?
                    cart.items.length === 0 ?
                        <NotResult icon={<ShoppingCartOutlined/>} title={'cartEmply'}/>
                        :
                        cart.items.map((opt:ItemsState)=>(
                            <Item id={opt.id}
                                  key={opt.id}
                                  image={opt.image}
                                  name={opt.name}
                                  value={opt.value}
                                  quantity={opt.quantity}/>
                        )): null
                }
            </Grid9>
            {!size.mobile?
                <Grid3 style={{padding:20}}>
                    <Resume/>
                </Grid3>
                : null
            }
        </Grid12>
    )
}