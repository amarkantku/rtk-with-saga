import { StyledTable } from './Table.styled';
import { tableActionItems } from '../../constant';
import EditIcon from '../../icons/Edit';
import DeleteIcon from '../../icons/Delete';

export const Table = ({
    id = 'table-wrapper',
    data,
    caption,
    isReadonly,
    handleClick,
}) => {
    const handleOnClick = (action, data) => {
        handleClick({ data, action });
    };
    return (
        <TableMarkup
            caption={caption}
            titles={Object.keys(data[0])}
            data={data}
            handleOnClick={handleOnClick}
            isReadonly={isReadonly}
            id={id}
        />
    );
};

const TableMarkup = ({
    id,
    caption,
    titles,
    data,
    isReadonly,
    handleOnClick,
}) => (
    <StyledTable data-testid={id}>
        <caption data-testid={'table-caption'}>{caption}</caption>
        <thead data-testid={'table-head'}>
            <tr>
                {titles.map((title, index) => (
                    <th className="heading" key={index}>
                        {title}
                    </th>
                ))}
                {!isReadonly && <th>{''}</th>}
            </tr>
        </thead>
        <tbody data-testid={'table-body'}>
            {data.map((item, index) => (
                <tr key={index}>
                    {titles.map((title, index) => (
                        <td key={index}>{item[title]}</td>
                    ))}

                    {!isReadonly && (
                        <td>
                            {tableActionItems.map((action) => {
                                return /edit/i.test(action.type) ? (
                                    <span
                                        onClick={() =>
                                            handleOnClick(action.type, item)
                                        }
                                        data-testid="edit-row-item"
                                        key={`${action.type}-${index}`}
                                    >
                                        <EditIcon />
                                    </span>
                                ) : /delete/i.test(action.type) ? (
                                    <span
                                        onClick={() =>
                                            handleOnClick(
                                                action.type,
                                                item.email
                                            )
                                        }
                                        data-testid="delete-row-item"
                                        key={`${action.type}-${index}`}
                                    >
                                        <DeleteIcon />
                                    </span>
                                ) : (
                                    ''
                                );
                            })}
                        </td>
                    )}
                </tr>
            ))}
        </tbody>
        <tfoot data-testid={'table-footer'}>{/* <tr>{footer}</tr> */}</tfoot>
    </StyledTable>
);

export default Table;
