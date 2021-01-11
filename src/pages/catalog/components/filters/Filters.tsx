import { Classes, Drawer, Position } from '@blueprintjs/core';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ECategory, EGenders } from '../../../../core/models/filters';
import { resetShowItemsInCatalog, setCategory, setGender } from '../../../../redux/actions';
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

    const selectCategory = (category: string) => {
        dispatch(setCategory(category));
        dispatch(resetShowItemsInCatalog());
        closeDrawer();
        window.scroll(0, 0);
    };

    const selectGender = (gender: string) => {
        dispatch(setGender(gender));
        dispatch(resetShowItemsInCatalog());
        closeDrawer();
        window.scroll(0, 0);
    };

    const isActiveCategory = (filterName: string) => filterName === filters.category;
    const isActiveGender = (filterName: string) => filterName === filters.gender;

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

                        <div className="filters-section">
                            <h3>Категория</h3>
                            {
                                topFilters.map((item: any) => {
                                    return (
                                        <div
                                            onClick={ () => selectCategory(item.category) }
                                            key={ item.text }
                                            className={ isActiveCategory(item.category) ? "filters-section-item active_item" : "filters-section-item" }
                                        >
                                            { item.text }
                                        </div>
                                    )
                                })
                            }

                        </div>

                        <div className="filters-section">
                            <h3>Пол</h3>
                            <div
                                onClick={ () => selectGender(EGenders.ANY) }
                                className={ isActiveGender(EGenders.ANY) ? "filters-section-item active_item" : "filters-section-item" }
                            >
                                Любой
                            </div>
                            
                            <div
                                onClick={ () => selectGender(EGenders.MALE) }
                                className={ isActiveGender(EGenders.MALE) ? "filters-section-item active_item" : "filters-section-item" }
                            >
                                Мужской
                            </div>

                            <div
                                onClick={ () => selectGender(EGenders.FEMALE) }
                                className={ isActiveGender(EGenders.FEMALE) ? "filters-section-item active_item" : "filters-section-item" }
                            >
                                Женский
                            </div>
                        </div>

                    </div>

                </div>
            </div>
        </Drawer>
    )
};

export default Filters;
