export type Corporate = {
  errors: [
    {
      item: string;
      message: string;
    },
  ];
  id: string;
  message: string;
  "hojin-infos": CorporateDetailList;
};

export type CorporateDetailList = Array<CorporateDetail>;

export type CorporateDetail = {
  businessItems: Array<string>;
  businessSummary: string;
  capitalStock: number;
  certification: [
    {
      category: string;
      dateOfApproval: string;
      enterpriseScale: string;
      expirationDate: string;
      governmentDepartments: string;
      target: string;
      title: string;
    },
  ];
  closeCause: string;
  closeDate: string;
  commendation: [
    {
      category: string;
      dateOfCommendation: string;
      governmentDepartments: string;
      target: string;
      title: string;
    },
  ];
  companySizeFemale: number;
  companySizeMale: number;
  companyUrl: string;
  corporateNumber: string;
  dateOfEstablishment: string;
  employeeNumber: number;
  finance: {
    accountingStandards: string;
    fiscalYearCoverPage: string;
    majorShareholders: [
      {
        nameMajorShareholders: string;
        shareholdingRatio: number;
      },
    ];
    managementIndex: [
      {
        capitalStockSummaryOfBusinessResults: number;
        capitalStockSummaryOfBusinessResultsUnitRef: string;
        grossOperatingRevenueSummaryOfBusinessResults: number;
        grossOperatingRevenueSummaryOfBusinessResultsUnitRef: string;
        netAssetsSummaryOfBusinessResults: number;
        netAssetsSummaryOfBusinessResultsUnitRef: string;
        netIncomeLossSummaryOfBusinessResults: number;
        netIncomeLossSummaryOfBusinessResultsUnitRef: string;
        netPremiumsWrittenSummaryOfBusinessResultsIns: number;
        netPremiumsWrittenSummaryOfBusinessResultsInsUnitRef: string;
        netSalesSummaryOfBusinessResults: number;
        netSalesSummaryOfBusinessResultsUnitRef: string;
        numberOfEmployees: number;
        numberOfEmployeesUnitRef: string;
        operatingRevenue1SummaryOfBusinessResults: number;
        operatingRevenue1SummaryOfBusinessResultsUnitRef: string;
        operatingRevenue2SummaryOfBusinessResults: number;
        operatingRevenue2SummaryOfBusinessResultsUnitRef: string;
        ordinaryIncomeLossSummaryOfBusinessResults: number;
        ordinaryIncomeLossSummaryOfBusinessResultsUnitRef: string;
        ordinaryIncomeSummaryOfBusinessResults: number;
        ordinaryIncomeSummaryOfBusinessResultsUnitRef: string;
        period: string;
        totalAssetsSummaryOfBusinessResults: number;
        totalAssetsSummaryOfBusinessResultsUnitRef: string;
      },
    ];
  };
  foundingYear: number;
  kana: string;
  location: string;
  name: string;
  nameEn: string;
  numberOfActivity: string;
  patent: [
    {
      applicationDate: string;
      applicationNumber: string;
      classifications: Array<{}>;
      patentType: string;
      title: string;
    },
  ];
  postalCode: string;
  procurement: [
    {
      amount: number;
      dateOfOrder: string;
      governmentDepartments: string;
      jointSignatures: Array<string>;
      title: string;
    },
  ];
  qualificationGrade: string;
  representativeName: string;
  representativePosition: string;
  status: string;
  subsidy: [
    {
      amount: string;
      dateOfApproval: string;
      governmentDepartments: string;
      jointSignatures: Array<string>;
      note: string;
      subsidyResource: string;
      target: string;
      title: string;
    },
  ];
  updateDate: string;
  workplaceInfo: {
    baseInfos: {
      averageAge: number;
      averageContinuousServiceYears: number;
      averageContinuousServiceYearsFemale: number;
      averageContinuousServiceYearsMale: number;
      averageContinuousServiceYearsType: string;
      monthAveragePredeterminedOvertimeHours: number;
    };
    compatibilityOfChildcareAndWork: {
      maternityLeaveAcquisitionNum: number;
      numberOfMaternityLeave: number;
      numberOfPaternityLeave: number;
      paternityLeaveAcquisitionNum: number;
    };
    womenActivityInfos: {
      femaleShareOfManager: number;
      femaleShareOfOfficers: number;
      femaleWorkersProportion: number;
      femaleWorkersProportionType: string;
      genderTotalOfManager: number;
      genderTotalOfOfficers: number;
    };
  };
};
