import { StyledTable } from './Table.styled';
import { tableActionItems } from '../../constant';
import EditIcon from '../../icons/Edit';
import DeleteIcon from '../../icons/Delete';

export const Table = ({ data, caption, isReadonly }) => {
    const handleOnClick = (data, action) => {
        console.log(data, action);
    };
    return (
        <TableMarkup
            caption={caption}
            titles={Object.keys(data[0])}
            data={data}
            handleOnClick={handleOnClick}
            isReadonly={isReadonly}
        />
    );
};

const TableMarkup = ({ caption, titles, data, isReadonly, handleOnClick }) => (
    <StyledTable>
        <caption>{caption}</caption>
        <thead>
            <tr>
                {titles.map((title, index) => (
                    <th className="heading" key={index}>
                        {title}
                    </th>
                ))}
                {!isReadonly && <th>{''}</th>}
            </tr>
        </thead>
        <tbody>
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
                                        data-testid="edit"
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
                                        data-testid="delete"
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
        <tfoot>{/* <tr>{footer}</tr> */}</tfoot>
    </StyledTable>
);

export default Table;
