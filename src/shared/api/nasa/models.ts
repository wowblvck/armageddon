export interface Links {
  next: string;
  previous: string;
  self: string;
}

export interface EstimatedDiameterValues {
  estimated_diameter_max: number;
  estimated_diameter_min: number;
}

export interface EstimatedDiameter {
  feet: EstimatedDiameterValues;
  kilometers: EstimatedDiameterValues;
  meters: EstimatedDiameterValues;
  miles: EstimatedDiameterValues;
}

export interface RelativeVelocity {
  kilometers_per_hour: string;
  kilometers_per_second: string;
  miles_per_hour: string;
}

export interface MissDistance {
  astronomical: string;
  kilometers: string;
  lunar: string;
  miles: string;
}

export interface CloseApproachData {
  close_approach_date: string;
  close_approach_date_full: string;
  epoch_date_close_approach: number;
  miss_distance: MissDistance;
  orbiting_body: string;
  relative_velocity: RelativeVelocity;
}

export interface OrbitClass {
  orbit_class_description: string;
  orbit_class_range: string;
  orbit_class_type: string;
}

export interface OrbitalData {
  aphelion_distance: string;
  ascending_node_longitude: string;
  data_arc_in_days: number;
  eccentricity: string;
  epoch_osculation: string;
  equinox: string;
  first_observation_date: string;
  inclination: string;
  jupiter_tisserand_invariant: string;
  last_observation_date: string;
  mean_anomaly: string;
  mean_motion: string;
  minimum_orbit_intersection: string;
  observations_used: number;
  orbit_class: OrbitClass;
  orbit_determination_date: string;
  orbit_id: string;
  orbit_uncertainty: string;
  orbital_period: string;
  perihelion_argument: string;
  perihelion_distance: string;
  perihelion_time: string;
  semi_major_axis: string;
}

export interface NearEarthObject {
  absolute_magnitude_h: number;
  close_approach_data: CloseApproachData[];
  estimated_diameter: EstimatedDiameter;
  id: string;
  is_potentially_hazardous_asteroid: boolean;
  is_sentry_object: boolean;
  links: Pick<Links, 'self'>;
  name: string;
  nasa_jpl_url: string;
  neo_reference_id: string;
  orbital_data?: OrbitalData;
}

export interface NearEarthObjectFull extends NearEarthObject {
  date: string;
}

export interface NearEarthObjects {
  [date: string]: NearEarthObject[];
}

export interface NEOFeed {
  element_count: number;
  links: Links;
  near_earth_objects: NearEarthObjects;
}

export interface NEOError {
  code: number;
  error_message: string;
  http_error: string;
  request: string;
}

export enum ErrorCode {
  API_KEY_INVALID = 'API_KEY_INVALID',
}

export interface NEOErrorSpecific {
  error: {
    code: ErrorCode;
    message: string;
  };
}

export type NASAError = NEOError | NEOErrorSpecific;
