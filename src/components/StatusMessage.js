import React from "react";

const StatusMessage = ({ winner, current }) => {

    const noMovesleft = current.board.every((el) => el !== null);

    return (
        <div className="status-message">
            {
                winner && (
                    <>
                        Winner is {' '}
                        <span className={winner === 'X' ? 'text-green' : 'text-orange'}>
                            {winner}
                        </span>
                    </>
                )
            }
            {
                !winner && !noMovesleft &&
                <>
                    Next player is  <span className={current.isXNext ? 'text-green' : 'text-orange'}>
                        {current.isXNext ? 'X' : '0'}
                    </span>
                </>
            }
            {
                !winner && noMovesleft &&
                <>
                    <span className="text-green"> X </span>
                    and
                    <span className="text-orange"> 0 </span> tied
                </>
            }
        </div>
    );
};

export default StatusMessage;