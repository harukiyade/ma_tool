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
  business_items: Array<string>;
  business_summary: string;
  capital_stock: number;
  certification: [
    {
      category: string;
      date_of_approval: string;
      enterprise_scale: string;
      expiration_date: string;
      government_departments: string;
      target: string;
      title: string;
    },
  ];
  close_cause: string;
  close_date: string;
  commendation: [
    {
      category: string;
      date_of_commendation: string;
      government_departments: string;
      target: string;
      title: string;
    },
  ];
  company_size_female: number;
  company_size_male: number;
  company_url: string;
  corporate_number: string;
  date_of_establishment: string;
  employee_number: number;
  finance: {
    accounting_standards: string;
    fiscal_year_cover_page: string;
    major_shareholders: [
      {
        name_major_shareholders: string;
        shareholding_ratio: number;
      },
    ];
    management_index: [
      {
        capital_stock_summary_of_business_results: number;
        capital_stock_summary_of_business_results_unit_ref: string;
        gross_operating_revenue_summary_of_business_results: number;
        gross_operating_revenue_summary_of_business_results_unit_ref: string;
        net_assets_summary_of_business_results: number;
        net_assets_summary_of_business_results_unit_ref: string;
        net_income_loss_summary_of_business_results: number;
        net_income_loss_summary_of_business_results_unit_ref: string;
        net_premiums_written_summary_of_business_results_ins: number;
        net_premiums_written_summary_of_business_results_ins_unit_ref: string;
        net_sales_summary_of_business_results: number;
        net_sales_summary_of_business_results_unit_ref: string;
        number_of_employees: number;
        number_of_employees_unit_ref: string;
        operating_revenue1_summary_of_business_results: number;
        operating_revenue1_summary_of_business_results_unit_ref: string;
        operating_revenue2_summary_of_business_results: number;
        operating_revenue2_summary_of_business_results_unit_ref: string;
        ordinary_income_loss_summary_of_business_results: number;
        ordinary_income_loss_summary_of_business_results_unit_ref: string;
        ordinary_income_summary_of_business_results: number;
        ordinary_income_summary_of_business_results_unit_ref: string;
        period: string;
        total_assets_summary_of_business_results: number;
        total_assets_summary_of_business_results_unit_ref: string;
      },
    ];
  };
  founding_year: number;
  kana: string;
  location: string;
  name: string;
  name_en: string;
  number_of_activity: string;
  patent: [
    {
      application_date: string;
      application_number: string;
      classifications: Array<{}>;
      patent_type: string;
      title: string;
    },
  ];
  postal_code: string;
  procurement: [
    {
      amount: number;
      date_of_order: string;
      government_departments: string;
      joint_signatures: Array<string>;
      title: string;
    },
  ];
  qualification_grade: string;
  representative_name: string;
  representative_position: string;
  status: string;
  subsidy: [
    {
      amount: string;
      date_of_approval: string;
      government_departments: string;
      joint_signatures: Array<string>;
      note: string;
      subsidy_resource: string;
      target: string;
      title: string;
    },
  ];
  update_date: string;
  workplace_info: {
    base_infos: {
      average_age: number;
      average_continuous_service_years: number;
      average_continuous_service_years_Female: number;
      average_continuous_service_years_Male: number;
      average_continuous_service_years_type: string;
      month_average_predetermined_overtime_hours: number;
    };
    compatibility_of_childcare_and_work: {
      maternity_leave_acquisition_num: number;
      number_of_maternity_leave: number;
      number_of_paternity_leave: number;
      paternity_leave_acquisition_num: number;
    };
    women_activity_infos: {
      female_share_of_manager: number;
      female_share_of_officers: number;
      female_workers_proportion: number;
      female_workers_proportion_type: string;
      gender_total_of_manager: number;
      gender_total_of_officers: number;
    };
  };
};
