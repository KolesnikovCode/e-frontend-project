import { Classes, Drawer, Position } from '@blueprintjs/core';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ECategory } from '../../../../core/models/filters';
import { setCategory } from '../../../../redux/actions';
import './filters.scss';

const topFilters = [
    {
        text: 'Все',
        category: ECategory.ANY
    },
    {
        text: 'Худи',
        category: ECategory.HOODIE
    },
    {
        text: 'Пальто',
        category: ECategory.COAT
    },
    {
        text: 'Пиджак',
        category: ECategory.JACKET
    },
    {
        text: 'Джинсы',
        category: ECategory.JEANS
    },
    {
        text: 'Штаны',
        category: ECategory.PANTS
    },
    {
        text: 'Рубашка',
        category: ECategory.SHIRT
    },
    {
        text: 'Кроссовки',
        category: ECategory.SNEAKERS
    },
    {
        text: 'Свитер',
        category: ECategory.SWEATER
    },
    {
        text: 'Свитшот',
        category: ECategory.SWEATSHOT
    },
    {
        text: 'Футболка',
        category: ECategory.T_SHIRT
    },
    {
        text: 'Ботинки',
        category: ECategory.BOOTS
    },
    {
        text: 'Куртка',
        category: ECategory.WARM_JACKET
    },
    {
        text: 'Аксессуары (Верх)',
        category: ECategory.ACCESSORY_TOP
    },
    {
        text: 'Аксессуары (Низ)',
        category: ECategory.ACCESSORY_BOTTOM
    }
];

interface IProps {
    isOpen: boolean;
    onClose: () => void
}

const Filters = ({ isOpen, onClose }: IProps) => {
    const dispatch = useDispatch();

    const filters = useSelector((state: any) => state.filters);

    const closeDrawer = () => {
        onClose();
    };

    const changeCategory = (category: string) => {
        dispatch(setCategory(category));
        closeDrawer();
        window.scroll(0, 0);
    };

    const isActiveCategory = (filterName: string) => filterName === filters.category;

    return (
        <Drawer
            isOpen={ isOpen }
            onClose={ closeDrawer }
            position={ Position.LEFT }
            size={ Drawer.SIZE_SMALL }
            autoFocus
            canEscapeKeyClose
            canOutsideClickClose
            className="filters"
        >
            <div className={ Classes.DRAWER_BODY }>
                <div className={ Classes.DIALOG_BODY }>
                    
                    <div className="filters-container">

                        <div className="filters-top">
                            
                            {
                                topFilters.map((item: any) => {
                                    return (
                                        <div
                                            onClick={ () => changeCategory(item.category) }
                                            key={ item.text }
                                            className={ isActiveCategory(item.category) ? "filters-top-item active_item" : "filters-top-item" }
                                        >
                                            { item.text }
                                        </div>
                                    )
                                })
                            }

                        </div>

                    </div>

                </div>
            </div>
        </Drawer>
    )
};

export default Filters;
