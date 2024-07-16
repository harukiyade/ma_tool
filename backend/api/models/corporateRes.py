from dataclasses import dataclass
from typing import List, Dict

# TODO: 追加情報や補足情報の型を追加する
@dataclass
class Certification:
    category: str
    dateOfApproval: str
    enterpriseScale: str
    expirationDate: str
    governmentDepartments: str
    target: str
    title: str

@dataclass
class Commendation:
    category: str
    dateOfCommendation: str
    governmentDepartments: str
    target: str
    title: str

@dataclass
class MajorShareholder:
    nameMajorShareholders: str
    shareholdingRatio: float

@dataclass
class ManagementIndex:
    capitalStockSummaryOfBusinessResults: int
    capitalStockSummaryOfBusinessResultsUnitRef: str
    grossOperatingRevenueSummaryOfBusinessResults: int
    grossOperatingRevenueSummaryOfBusinessResultsUnitRef: str
    netAssetsSummaryOfBusinessResults: int
    netAssetsSummaryOfBusinessResultsUnitRef: str
    netIncomeLossSummaryOfBusinessResults: int
    netIncomeLossSummaryOfBusinessResultsUnitRef: str
    netPremiumsWrittenSummaryOfBusinessResultsIns: int
    netPremiumsWrittenSummaryOfBusinessResultsInsUnitRef: str
    netSalesSummaryOfBusinessResults: int
    netSalesSummaryOfBusinessResultsUnitRef: str
    numberOfEmployees: int
    numberOfEmployeesUnitRef: str
    operatingRevenue1SummaryOfBusinessResults: int
    operatingRevenue1SummaryOfBusinessResultsUnitRef: str
    operatingRevenue2SummaryOfBusinessResults: int
    operatingRevenue2SummaryOfBusinessResultsUnitRef: str
    ordinaryIncomeLossSummaryOfBusinessResults: int
    ordinaryIncomeLossSummaryOfBusinessResultsUnitRef: str
    ordinaryIncomeSummaryOfBusinessResults: int
    ordinaryIncomeSummaryOfBusinessResultsUnitRef: str
    period: str
    totalAssetsSummaryOfBusinessResults: int
    totalAssetsSummaryOfBusinessResultsUnitRef: str

@dataclass
class Finance:
    accountingStandards: str
    fiscalYearCoverPage: str
    majorShareholders: List[MajorShareholder]
    managementIndex: List[ManagementIndex]

@dataclass
class Patent:
    applicationDate: str
    applicationNumber: str
    classifications: List[Dict]
    patentType: str
    title: str

@dataclass
class Procurement:
    amount: int
    dateOfOrder: str
    governmentDepartments: str
    jointSignatures: List[str]
    title: str

@dataclass
class Subsidy:
    amount: str
    dateOfApproval: str
    governmentDepartments: str
    jointSignatures: List[str]
    note: str
    subsidyResource: str
    target: str
    title: str

@dataclass
class BaseInfos:
    averageAge: float
    averageContinuousServiceYears: float
    averageContinuousServiceYearsFemale: float
    averageContinuousServiceYearsMale: float
    averageContinuousServiceYearsType: str
    monthAveragePredeterminedOvertimeHours: float

@dataclass
class CompatibilityOfChildcareAndWork:
    maternityLeaveAcquisitionNum: int
    numberOfMaternityLeave: int
    numberOfPaternityLeave: int
    paternityLeaveAcquisitionNum: int

@dataclass
class WomenActivityInfos:
    femaleShareOfManager: float
    femaleShareOfOfficers: float
    femaleWorkersProportion: float
    femaleWorkersProportionType: str
    genderTotalOfManager: int
    genderTotalOfOfficers: int

@dataclass
class WorkplaceInfo:
    baseInfos: BaseInfos
    compatibilityOfChildcareAndWork: CompatibilityOfChildcareAndWork
    womenActivityInfos: WomenActivityInfos

@dataclass
class CorporateDetail:
    businessItems: List[str]
    businessSummary: str
    capitalStock: int
    certification: List[Certification]
    closeCause: str
    closeDate: str
    commendation: List[Commendation]
    companySizeFemale: int
    companySizeMale: int
    companyUrl: str
    corporateNumber: str
    dateOfEstablishment: str
    employeeNumber: int
    finance: Finance
    foundingYear: int
    kana: str
    location: str
    name: str
    nameEn: str
    numberOfActivity: str
    patent: List[Patent]
    postalCode: str
    procurement: List[Procurement]
    qualificationGrade: str
    representativeName: str
    representativePosition: str
    status: str
    subsidy: List[Subsidy]
    updateDate: str
    workplaceInfo: WorkplaceInfo

CorporateDetailList = List[CorporateDetail]