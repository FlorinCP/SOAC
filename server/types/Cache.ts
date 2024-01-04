export class Cache {
  private DataCache: string[] = [];
  private DataCacheSize: number = 0;
  private DataBlockSize: number = 0;
  private InstrCache: string[] = [];
  private InstrCacheSize: number = 0;
  private InstrBlockSize: number = 0;
  protected FetchRate: number = 0;
  protected IRMax: number = 0;
  private Ticks: number = 0;
  protected Latency: number = 0;

    constructor(
        DataCacheSize: number,
        DataBlockSize: number,
        InstrCacheSize: number,
        InstrBlockSize: number,
        FetchRate: number,
        IRMax: number,
        Latency: number
    ) {
        this.DataCacheSize = DataCacheSize;
        this.DataBlockSize = DataBlockSize;
        this.InstrCacheSize = InstrCacheSize;
        this.InstrBlockSize = InstrBlockSize;
        this.FetchRate = FetchRate;
        this.IRMax = IRMax;
        this.Latency = Latency;
    }



}
