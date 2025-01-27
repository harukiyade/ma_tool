
from models.corporateRes import BaseInfos, Certification, Commendation, CompatibilityOfChildcareAndWork, CorporateDetail, CorporateDetailList, Finance, MajorShareholder, ManagementIndex, Patent, Procurement, Subsidy, WomenActivityInfos, WorkplaceInfo

# TODO: firestoreに接続できたら削除
sampleData: CorporateDetailList = [
    CorporateDetail(
        businessItems=["ITコンサルティング", "ソフトウェア開発"],
        businessSummary="IT関連のコンサルティングおよびソフトウェア開発を行う企業。",
        capitalStock=50000000,
        certification=[
            Certification(
                category="ISO 9001",
                dateOfApproval="2019-04-01",
                enterpriseScale="中小企業",
                expirationDate="2022-03-31",
                governmentDepartments="日本品質保証機構",
                target="全社",
                title="品質管理システム"
            )
        ],
        closeCause="",
        closeDate="",
        commendation=[
            Commendation(
                category="技術賞",
                dateOfCommendation="2021-10-15",
                governmentDepartments="経済産業省",
                target="開発チーム",
                title="革新技術賞"
            )
        ],
        companySizeFemale=25,
        companySizeMale=45,
        companyUrl="https://www.tech-consulting.jp",
        corporateNumber="1010001084833",
        dateOfEstablishment="2010-05-12",
        employeeNumber=70,
        finance=Finance(
            accountingStandards="日本基準",
            fiscalYearCoverPage="2021",
            majorShareholders=[
                MajorShareholder(nameMajorShareholders="田中太郎", shareholdingRatio=40)
            ],
            managementIndex=[
                ManagementIndex(
                    capitalStockSummaryOfBusinessResults=50000000,
                    capitalStockSummaryOfBusinessResultsUnitRef="JPY",
                    grossOperatingRevenueSummaryOfBusinessResults=200000000,
                    grossOperatingRevenueSummaryOfBusinessResultsUnitRef="JPY",
                    netAssetsSummaryOfBusinessResults=100000000,
                    netAssetsSummaryOfBusinessResultsUnitRef="JPY",
                    netIncomeLossSummaryOfBusinessResults=5000000,
                    netIncomeLossSummaryOfBusinessResultsUnitRef="JPY",
                    netPremiumsWrittenSummaryOfBusinessResultsIns=0,
                    netPremiumsWrittenSummaryOfBusinessResultsInsUnitRef="JPY",
                    netSalesSummaryOfBusinessResults=200000000,
                    netSalesSummaryOfBusinessResultsUnitRef="JPY",
                    numberOfEmployees=70,
                    numberOfEmployeesUnitRef="人",
                    operatingRevenue1SummaryOfBusinessResults=180000000,
                    operatingRevenue1SummaryOfBusinessResultsUnitRef="JPY",
                    operatingRevenue2SummaryOfBusinessResults=20000000,
                    operatingRevenue2SummaryOfBusinessResultsUnitRef="JPY",
                    ordinaryIncomeLossSummaryOfBusinessResults=5000000,
                    ordinaryIncomeLossSummaryOfBusinessResultsUnitRef="JPY",
                    ordinaryIncomeSummaryOfBusinessResults=5000000,
                    ordinaryIncomeSummaryOfBusinessResultsUnitRef="JPY",
                    period="2021-04-01 to 2022-03-31",
                    totalAssetsSummaryOfBusinessResults=150000000,
                    totalAssetsSummaryOfBusinessResultsUnitRef="JPY"
                )
            ]
        ),
        foundingYear=2010,
        kana="テックコンサルティング",
        location="東京都千代田区丸の内２丁目４番１号",
        name="株式会社テックコンサルティング",
        nameEn="Tech Consulting Inc.",
        numberOfActivity="0",
        patent=[
            Patent(
                applicationDate="2020-08-10",
                applicationNumber="2020-123456",
                classifications=[],
                patentType="発明",
                title="AIを用いたデータ解析システム"
            )
        ],
        postalCode="1000005",
        procurement=[
            Procurement(
                amount=10000000,
                dateOfOrder="2021-09-15",
                governmentDepartments="総務省",
                jointSignatures=["株式会社システムデザイン"],
                title="新規プロジェクト"
            )
        ],
        qualificationGrade="A",
        representativeName="田中太郎",
        representativePosition="代表取締役",
        status="運営中",
        subsidy=[
            Subsidy(
                amount="5000000",
                dateOfApproval="2021-05-20",
                governmentDepartments="経済産業省",
                jointSignatures=["株式会社サポートエンジニアリング"],
                note="新規技術開発のための補助金",
                subsidyResource="国庫",
                target="開発チーム",
                title="技術開発補助金"
            )
        ],
        updateDate="2023-07-01",
        workplaceInfo=WorkplaceInfo(
            baseInfos=BaseInfos(
                averageAge=35.5,
                averageContinuousServiceYears=7,
                averageContinuousServiceYearsFemale=6,
                averageContinuousServiceYearsMale=8,
                averageContinuousServiceYearsType="中央値",
                monthAveragePredeterminedOvertimeHours=10
            ),
            compatibilityOfChildcareAndWork=CompatibilityOfChildcareAndWork(
                maternityLeaveAcquisitionNum=5,
                numberOfMaternityLeave=5,
                numberOfPaternityLeave=2,
                paternityLeaveAcquisitionNum=2
            ),
            womenActivityInfos=WomenActivityInfos(
                femaleShareOfManager=20,
                femaleShareOfOfficers=10,
                femaleWorkersProportion=35,
                femaleWorkersProportionType="割合",
                genderTotalOfManager=10,
                genderTotalOfOfficers=5
            )
        )
    ),
    CorporateDetail(
        businessItems=["金融サービス", "保険"],
        businessSummary="総合金融サービスを提供する企業。",
        capitalStock=100000000,
        certification=[
            Certification(
                category="ISO 27001",
                dateOfApproval="2020-03-15",
                enterpriseScale="大企業",
                expirationDate="2023-03-14",
                governmentDepartments="情報セキュリティ認証機構",
                target="全社",
                title="情報セキュリティ管理システム"
            )
        ],
        closeCause="",
        closeDate="",
        commendation=[
            Commendation(
                category="サービス賞",
                dateOfCommendation="2022-06-20",
                governmentDepartments="金融庁",
                target="カスタマーサービス部門",
                title="顧客満足度No.1"
            )
        ],
        companySizeFemale=150,
        companySizeMale=200,
        companyUrl="https://www.financial-services.jp",
        corporateNumber="2010002094834",
        dateOfEstablishment="1985-07-15",
        employeeNumber=350,
        finance=Finance(
            accountingStandards="日本基準",
            fiscalYearCoverPage="2021",
            majorShareholders=[
                MajorShareholder(nameMajorShareholders="鈴木一郎", shareholdingRatio=25)
            ],
            managementIndex=[
                ManagementIndex(
                    period="2021-04-01 to 2022-03-31",
                    capitalStockSummaryOfBusinessResults=100000000,
                    capitalStockSummaryOfBusinessResultsUnitRef="JPY",
                    grossOperatingRevenueSummaryOfBusinessResults=500000000,
                    grossOperatingRevenueSummaryOfBusinessResultsUnitRef="JPY",
                    netAssetsSummaryOfBusinessResults=300000000,
                    netAssetsSummaryOfBusinessResultsUnitRef="JPY",
                    netIncomeLossSummaryOfBusinessResults=20000000,
                    netIncomeLossSummaryOfBusinessResultsUnitRef="JPY",
                    netPremiumsWrittenSummaryOfBusinessResultsIns=0,
                    netPremiumsWrittenSummaryOfBusinessResultsInsUnitRef="JPY",
                    netSalesSummaryOfBusinessResults=500000000,
                    netSalesSummaryOfBusinessResultsUnitRef="JPY",
                    numberOfEmployees=350,
                    numberOfEmployeesUnitRef="人",
                    operatingRevenue1SummaryOfBusinessResults=450000000,
                    operatingRevenue1SummaryOfBusinessResultsUnitRef="JPY",
                    operatingRevenue2SummaryOfBusinessResults=50000000,
                    operatingRevenue2SummaryOfBusinessResultsUnitRef="JPY",
                    ordinaryIncomeLossSummaryOfBusinessResults=20000000,
                    ordinaryIncomeLossSummaryOfBusinessResultsUnitRef="JPY",
                    ordinaryIncomeSummaryOfBusinessResults=20000000,
                    ordinaryIncomeSummaryOfBusinessResultsUnitRef="JPY",
                    totalAssetsSummaryOfBusinessResults=600000000,
                    totalAssetsSummaryOfBusinessResultsUnitRef="JPY"
                )
            ]
        ),
        foundingYear=1985,
        kana="フィナンシャルサービス",
        location="東京都港区赤坂１丁目２番３号",
        name="フィナンシャルサービス株式会社",
        nameEn="Financial Services Inc.",
        numberOfActivity="0",
        patent=[
            Patent(
                applicationDate="2019-11-20",
                applicationNumber="2019-234567",
                classifications=[],
                patentType="発明",
                title="自動保険請求システム"
            )
        ],
        postalCode="1070052",
        procurement=[
            Procurement(
                amount=20000000,
                dateOfOrder="2021-12-10",
                governmentDepartments="財務省",
                jointSignatures=["株式会社リスクマネジメント"],
                title="新規システム導入"
            )
        ],
        qualificationGrade="A",
        representativeName="鈴木一郎",
        representativePosition="代表取締役社長",
        status="事業中",
        subsidy=[
            Subsidy(
                amount="5000000",
                dateOfApproval="2022-05-01",
                governmentDepartments="環境省",
                jointSignatures=["株式会社環境テクノロジー"],
                note="エコプロジェクト",
                subsidyResource="国",
                target="温室効果ガス削減技術",
                title="環境保全活動"
            )
        ],
        updateDate="2022-12-31",
        workplaceInfo=WorkplaceInfo(
            baseInfos=BaseInfos(
                averageAge=38.5,
                averageContinuousServiceYears=10.5,
                averageContinuousServiceYearsFemale=8.5,
                averageContinuousServiceYearsMale=12,
                averageContinuousServiceYearsType="年",
                monthAveragePredeterminedOvertimeHours=10
            ),
            compatibilityOfChildcareAndWork=CompatibilityOfChildcareAndWork(
                maternityLeaveAcquisitionNum=25,
                numberOfMaternityLeave=100,
                numberOfPaternityLeave=5,
                paternityLeaveAcquisitionNum=30
            ),
            womenActivityInfos=WomenActivityInfos(
                femaleShareOfManager=30,
                femaleShareOfOfficers=25,
                femaleWorkersProportion=50,
                femaleWorkersProportionType="%",
                genderTotalOfManager=100,
                genderTotalOfOfficers=80
            )
        )
    ),
    CorporateDetail(
        businessItems=["金融サービス", "保険"],
        businessSummary="総合金融サービスを提供する企業。",
        capitalStock=100000000,
        certification=[
            Certification(
                category="ISO 27001",
                dateOfApproval="2020-03-15",
                enterpriseScale="大企業",
                expirationDate="2023-03-14",
                governmentDepartments="情報セキュリティ認証機構",
                target="全社",
                title="情報セキュリティ管理システム"
            )
        ],
        closeCause="",
        closeDate="",
        commendation=[
            Commendation(
                category="サービス賞",
                dateOfCommendation="2022-06-20",
                governmentDepartments="金融庁",
                target="カスタマーサービス部門",
                title="顧客満足度No.1"
            )
        ],
        companySizeFemale=150,
        companySizeMale=200,
        companyUrl="https://www.financial-services.jp",
        corporateNumber="2010002094834",
        dateOfEstablishment="1985-07-15",
        employeeNumber=350,
        finance=Finance(
            accountingStandards="日本基準",
            fiscalYearCoverPage="2021",
            majorShareholders=[
                MajorShareholder(nameMajorShareholders="鈴木一郎", shareholdingRatio=25)
            ],
            managementIndex=[
                ManagementIndex(
                    period="2021-04-01 to 2022-03-31",
                    capitalStockSummaryOfBusinessResults=100000000,
                    capitalStockSummaryOfBusinessResultsUnitRef="JPY",
                    grossOperatingRevenueSummaryOfBusinessResults=500000000,
                    grossOperatingRevenueSummaryOfBusinessResultsUnitRef="JPY",
                    netAssetsSummaryOfBusinessResults=300000000,
                    netAssetsSummaryOfBusinessResultsUnitRef="JPY",
                    netIncomeLossSummaryOfBusinessResults=20000000,
                    netIncomeLossSummaryOfBusinessResultsUnitRef="JPY",
                    netPremiumsWrittenSummaryOfBusinessResultsIns=0,
                    netPremiumsWrittenSummaryOfBusinessResultsInsUnitRef="JPY",
                    netSalesSummaryOfBusinessResults=500000000,
                    netSalesSummaryOfBusinessResultsUnitRef="JPY",
                    numberOfEmployees=350,
                    numberOfEmployeesUnitRef="人",
                    operatingRevenue1SummaryOfBusinessResults=450000000,
                    operatingRevenue1SummaryOfBusinessResultsUnitRef="JPY",
                    operatingRevenue2SummaryOfBusinessResults=50000000,
                    operatingRevenue2SummaryOfBusinessResultsUnitRef="JPY",
                    ordinaryIncomeLossSummaryOfBusinessResults=20000000,
                    ordinaryIncomeLossSummaryOfBusinessResultsUnitRef="JPY",
                    ordinaryIncomeSummaryOfBusinessResults=20000000,
                    ordinaryIncomeSummaryOfBusinessResultsUnitRef="JPY",
                    totalAssetsSummaryOfBusinessResults=600000000,
                    totalAssetsSummaryOfBusinessResultsUnitRef="JPY"
                )
            ]
        ),
        foundingYear=1985,
        kana="フィナンシャルサービス",
        location="東京都港区赤坂１丁目２番３号",
        name="フィナンシャルサービス株式会社",
        nameEn="Financial Services Inc.",
        numberOfActivity="0",
        patent=[
            Patent(
                applicationDate="2019-11-20",
                applicationNumber="2019-234567",
                classifications=[],
                patentType="発明",
                title="自動保険請求システム"
            )
        ],
        postalCode="1070052",
        procurement=[
            Procurement(
                amount=20000000,
                dateOfOrder="2021-12-10",
                governmentDepartments="財務省",
                jointSignatures=["株式会社リスクマネジメント"],
                title="新規システム導入"
            )
        ],
        qualificationGrade="A",
        representativeName="鈴木一郎",
        representativePosition="代表取締役社長",
        status="事業中",
        subsidy=[
            Subsidy(
                amount="5000000",
                dateOfApproval="2022-05-01",
                governmentDepartments="環境省",
                jointSignatures=["株式会社環境テクノロジー"],
                note="エコプロジェクト",
                subsidyResource="国",
                target="温室効果ガス削減技術",
                title="環境保全活動"
            )
        ],
        updateDate="2022-12-31",
        workplaceInfo=WorkplaceInfo(
            baseInfos=BaseInfos(
                averageAge=38.5,
                averageContinuousServiceYears=10.5,
                averageContinuousServiceYearsFemale=8.5,
                averageContinuousServiceYearsMale=12,
                averageContinuousServiceYearsType="年",
                monthAveragePredeterminedOvertimeHours=10
            ),
            compatibilityOfChildcareAndWork=CompatibilityOfChildcareAndWork(
                maternityLeaveAcquisitionNum=25,
                numberOfMaternityLeave=100,
                numberOfPaternityLeave=5,
                paternityLeaveAcquisitionNum=30
            ),
            womenActivityInfos=WomenActivityInfos(
                femaleShareOfManager=30,
                femaleShareOfOfficers=25,
                femaleWorkersProportion=50,
                femaleWorkersProportionType="%",
                genderTotalOfManager=100,
                genderTotalOfOfficers=80
            )
        )
    ),
]