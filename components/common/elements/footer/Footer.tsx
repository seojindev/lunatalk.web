function Footer() {
  return (
    <div className="py-6 border-[#eee] border-t-[1px] tablet:py-4 mobile:py-2 tablet:px-2">
      <div className="max-w-[1250px] mx-auto flex flex-wrap">
        <div className="-tracking-[1px]">
          <h3 className="text-lg mb-4 font-semibold tablet:text-base mobile:text-xs mobile:mb-2">
            주식회사 서진산업
          </h3>
          <p className="text-sm mb-2 tablet:mb-0 tablet:text-[10px]">
            대표이사 : 강대용 / 경기도 부천시 원종로 131(고강동) 3층 서진산업
          </p>
          <p className="text-sm mb-2 tablet:mb-0 tablet:text-[10px]">
            사업자등록번호 : 130-86-59053 / 통신판매업 신고 : 2011-경기부천-1500
          </p>
          <p className="text-sm mb-2 tablet:mb-0 tablet:text-[10px]">
            개인정보보호책임자 : 강대용 / lunatalk.helpper@gmail.com
          </p>
          <p className="text-sm mb-2 tablet:mb-0 tablet:text-[10px] font-semibold">
            COPYRIGHT © LUNATALK ALL RIGHTS RESERVED.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
