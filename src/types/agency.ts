type TAgency = {
  agency_id?: string;
  agency_name: string;
  agency_url: string;
  agency_timezone: string;
  agency_lang?: string;
  agency_phone?: string;
  agency_fare_url?: string;
  agency_email?: string;
};

const agencyHeaders: Array<keyof TAgency> = [
  "agency_id",
  "agency_name",
  "agency_url",
  "agency_timezone",
  "agency_lang",
  "agency_phone",
  "agency_fare_url",
  "agency_email",
];

const emptyAgency: TAgency = {
  agency_id: "",
  agency_name: "",
  agency_url: "",
  agency_timezone: "",
  agency_lang: "",
  agency_phone: "",
  agency_fare_url: "",
  agency_email: "",
};

export { TAgency, agencyHeaders, emptyAgency };
