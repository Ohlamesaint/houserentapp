import React, { Component } from 'react'
import ModalButton from './ModalButton'
import buttonSQL from './buttonSQL'

class Button extends Component {
    render() {
        return (
            <div class="accordion" id="accordionExample">
                <div class="accordion-item">
                    <h2 class="accordion-header" id="headingOne">
                        <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                            學生相關
                        </button>
                    </h2>
                    <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                        <div class="accordion-body">
                            <ModalButton name='查找成大學生' sql={buttonSQL.SELECT_FROM_WHERE} />
                            <ModalButton name='學生註冊' sql={buttonSQL.INSERT} />
                            <ModalButton name='查詢有合約的學生' sql={buttonSQL.EXISTS} />
                            <ModalButton name='查詢沒合約的學生' sql={buttonSQL.NOT_EXISTS} />
                            <ModalButton name='查詢台南市學生的最高預算' sql={buttonSQL.MAX} />
                            <ModalButton name='查詢台南市學生的最低預算' sql={buttonSQL.MIN} />
                        </div>
                    </div>
                </div>
                <div class="accordion-item">
                    <h2 class="accordion-header" id="headingTwo">
                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                            屋主相關
                        </button>
                    </h2>
                    <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                        <div class="accordion-body">
                            <ModalButton name='某個房東房租調漲' sql={buttonSQL.UPDATE} />
                            <ModalButton name='某個房東所有房' sql={buttonSQL.IN} />
                            <ModalButton name='查詢房東一個月總收入' sql={buttonSQL.SUM} />
                            <ModalButton name='台南市房東評論' sql={buttonSQL.NOT_IN} />
                            <ModalButton name='低評價房東查詢' sql={buttonSQL.HAVING} />
                        </div>
                    </div>
                </div>
                <div class="accordion-item">
                    <h2 class="accordion-header" id="headingThree">
                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                            其他相關
                        </button>
                    </h2>
                    <div id="collapseThree" class="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                        <div class="accordion-body">
                            <ModalButton name='刪除已被完成請求' sql={buttonSQL.DELETE} />
                            <ModalButton name='查詢台南市目前房屋數量' sql={buttonSQL.COUNT} />
                            <ModalButton name='台南市房屋平均價格' sql={buttonSQL.AVG} />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export { Button as default }