/**
 *
 */

type DATE_FORMAT = 'yy-mm-dd'
interface Plan {
  //开始日期
  startDate: DATE_FORMAT;
  //结束日期
  endDate: DATE_FORMAT;
  //平均每天刷多少题
  average: number;
}

class Calendar {
  constructor(config: Plan): void {
    this.startDate = config.startDate
    this.endDate = config.endDate
    this.render();
  }

  render({datas : <T extends Plan> []}) {
    
  }
}
